export default {
  /**
   * loadScript - 加载script脚本
   * @param script
   * @return Promise
   */
  loadScript(script: string): Promise<null> {
    return new Promise<null>((resolve) => {
      const el = document.createElement('script');
      el.addEventListener('load', () => {
        resolve();
      });
      el.src = script;
      document.getElementsByTagName('head')[0].appendChild(el);
    });
  },

  /**
   * loadLink - 加载css文件
   * @param link
   * @return Promise
   */
  loadLink(link: string): Promise<null> {
    return new Promise<null>((resolve) => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'stylesheet');
      el.addEventListener('load', () => {
        resolve();
      });
      el.href = link;
      document.getElementsByTagName('head')[0].appendChild(el);
    });
  },

  // @ts-ignore
  /**
   * loadRemoteResource - 加载远程所有的脚本和样式资源
   * @param scripts
   * @param links
   * @return Promise
   */
  loadRemoteResource({ scripts, links }: { scripts: string[]; links: string[] }): Promise<null> {
    // @ts-ignore
    return Promise.all(
      [].concat(
        // @ts-ignore
        (scripts || []).map((script: string) => this.loadScript(script)),
        (links || []).map((link: string) => this.loadLink(link)),
      ),
    );
  },
};
