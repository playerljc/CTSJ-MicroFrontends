/**
 * Events
 * @class Events
 * @classdesc Events
 */
class Events {
  // eslint-disable-next-line @typescript-eslint/ban-types
  private events: {};

  /**
   * @constructor
   */
  constructor() {
    this.events = {};
  }

  /**
   * remove
   * @param {type} type
   * @param {Function} handler
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  remove(type: string | symbol, handler: Function) {
    if (this.hasType(type)) {
      const index = this.events[type].handlers.findIndex((item) => {
        return item === handler;
      });

      if (index !== -1) {
        this.events[type].handlers.splice(index, 1);
      }
    }
  }

  /**
   * hasType
   * @param {string} type
   * @return {boolean}
   */
  hasType(type: string | symbol): boolean {
    return type in this.events;
  }

  /**
   * clear 清除一个type下的所有handler
   * @param {string} type
   */
  clear(type: string | symbol) {
    if (this.hasType(type)) {
      this.events[type].handlers = [];
    }
  }

  /**
   * 清除所有
   */
  clearAll() {
    this.events = {};
  }

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   * @param {number} makStackSize
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  on(type: string | symbol, handler: Function, makStackSize = 200) {
    if (!this.hasType(type)) {
      this.events[type] = {
        handlers: [],
      };
    }

    // length - 7
    // 0 1 2 3 4 5 6

    // maxStackSize - 2

    const { handlers } = this.events[type];

    if (handlers.length === makStackSize) {
      handlers.shift();
    }

    if (handlers.length > makStackSize) {
      const { length } = handlers;

      this.events[type].handlers = handlers.slice(length - makStackSize + 1);
    }

    handlers.push(handler);
  }

  /**
   * once
   * @param type
   * @param handler
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  once(type: string | symbol, handler: Function) {
    if (!this.hasType(type)) {
      this.events[type] = {
        handlers: [],
      };
    }

    this.events[type].handlers = [
      () => {
        if (handler) {
          handler();
        }

        this.clear(type);
      },
    ];
  }

  /**
   * all
   * @param types
   * @param handler
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  all(types: string[], handler: Function) {
    let changeLogs: { key: symbol; status: boolean; fn: Function }[] = [];

    types.forEach((type) => {
      const key = Symbol.for(type);

      const fn = () => {
        // @ts-ignore
        changeLogs.find((t) => t.key === key).status = true;

        if (changeLogs.every((t) => t.status)) {
          if (handler) {
            changeLogs = changeLogs.map((t) => ({ key: t.key, fn: t.fn, status: false }));

            handler();
          }
        }
      };

      changeLogs.push({
        key,
        status: false,
        fn,
      });

      this.on(key, fn);
    });

    return () => {
      changeLogs.forEach((t) => {
        this.remove(t.key, t.fn);
      });
    };
  }

  /**
   * race
   * @param types
   * @param handler
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  race(types: string[], handler: Function) {
    let changeLogs: { key: symbol; status: boolean; fn: Function }[] = [];

    types.forEach((type) => {
      const key = Symbol.for(type);

      const fn = () => {
        // @ts-ignore
        changeLogs.find((t) => t.key === key).status = true;

        if (changeLogs.some((t) => t.status)) {
          if (handler) {
            changeLogs = changeLogs.map((t) => ({ key: t.key, fn: t.fn, status: false }));

            handler();
          }
        }
      };

      changeLogs.push({
        key,
        status: false,
        fn,
      });

      this.on(key, fn);
    });

    return () => {
      changeLogs.forEach((t) => {
        this.remove(t.key, t.fn);
      });
    };
  }

  /**
   * count
   * @param type
   * @param count
   * @param handler
   */
  count(type, count, handler) {
    let number = 0;

    const key = Symbol.for(type);

    const fn = () => {
      number += 1;

      if (number === count) {
        if (handler) {
          handler();
        }

        number = 0;
      }
    };

    this.on(key, fn);

    return () => {
      this.remove(key, fn);
    };
  }

  /**
   * trigger
   * @param {string} type
   * @param {Object} params
   */
  // @ts-ignore
  trigger(type: string | symbol, ...params: any[]) {
    let result;

    if (this.hasType(type)) {
      this.events[type].handlers.forEach((handler) => {
        // @ts-ignore
        result = handler(...params);

        // type是字符串的时候发送symbol消息
        if (typeof type === 'string') {
          this.trigger(Symbol.for(type));
        }
      });
    }

    return result;
  }

  /**
   * document自定义事件的触发
   * @param el
   * @param type
   * @param params
   */
  dispatchEvent(el: HTMLElement | Document = document, type: string, params: CustomEventInit) {
    const event = new CustomEvent(type, params);
    el.dispatchEvent(event);
  }
}

/**
 * 消息通知
 */
export default Events;
