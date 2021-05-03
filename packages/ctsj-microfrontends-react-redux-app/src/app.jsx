import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Modal, Form, message } from 'antd';

import styles from './app.less';

const { Search, TextArea } = Input;

// eslint-disable-next-line no-underscore-dangle
let _id;

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.Component {
  state = {
    isModalVisible: false,
  };

  formRef = React.createRef();

  onSearch = (kw) => {};

  onAdd = () => {
    this?.formRef?.current?.resetFields();

    this.setState({
      isModalVisible: true,
    });
  };

  onModify = (id) => {
    this?.formRef?.current?.resetFields();

    _id = id;

    const { list } = this.props;

    const item = list.find((t) => t.id === id);

    console.log('onModify', id, list, item);

    this.formRef.current.setFieldsValue({
      id,
      title: item.title,
      info: item.info,
    });

    this.setState(
      {
        isModalVisible: true,
      },
      () => {},
    );
  };

  onRemove = (id) => {
    this.props.fetchRemove(id);
  };

  handleOk = () => {
    this.formRef.current.validateFields().then((values) => {
      console.log('handleOk', _id, this.props.list, values);

      // 编辑
      if (_id) {
        this.props.fetchModify(values);
      }
      // 添加
      else {
        this.props.fetchAdd({
          ...values,
          id: new Date().getTime(),
        });
      }

      message.success('操作成功');

      this.setState(
        {
          isModalVisible: false,
        },
        () => {
          _id = null;
        },
      );
    });
  };

  handleCancel = () => {
    _id = null;

    this.setState(
      {
        isModalVisible: false,
      },
      () => {
        this?.formRef?.current?.resetFields();
      },
    );
  };

  renderList() {
    const { list } = this.props;
    return (
      <ul className={styles.List}>
        {list.map((item) => {
          return (
            <li className={styles.Item}>
              <div className={styles.Auto}>
                <p>{item.title}</p>
                <p>{item.info}</p>
              </div>
              <div className={styles.Fixed}>
                <Button
                  type="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    this.onModify(item.id);
                  }}
                >
                  编辑
                </Button>
                <Button
                  onClick={() => {
                    this.onRemove(item.id);
                  }}
                >
                  删除
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  renderModal() {
    return (
      <Modal
        title="Open"
        visible={this.state.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form ref={this.formRef} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          <Form.Item hidden name="id" />

          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入标题!',
              },
            ]}
          >
            <Input placeholder="标题" />
          </Form.Item>
          <Form.Item
            label="内容"
            name="info"
            rules={[
              {
                required: true,
                message: '请输入内容!',
              },
            ]}
          >
            <TextArea placeholder="内容" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  render() {
    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <div className={styles.Auto}>
            <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
          </div>
          <div className={styles.Fixed}>
            <Button type="primary" onClick={this.onAdd}>
              添加
            </Button>
          </div>
        </div>
        <div className={styles.Auto}>{this.renderList()}</div>

        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAdd(data) {
    dispatch({
      type: 'add',
      data,
    });
  },
  fetchRemove(id) {
    dispatch({
      type: 'remove',
      id,
    });
  },
  fetchModify(data) {
    console.log('fetchModify', data);

    dispatch({
      type: 'modify',
      data,
    });
  },
  fetchList() {
    dispatch({
      type: 'list',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
