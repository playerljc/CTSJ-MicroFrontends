import React from 'react';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <button
        onClick={() => {
          props.history.push('/system/statistics/person');
        }}
      >
        person
      </button>
      <button
        onClick={() => {
          props.history.push('/system/statistics/department');
        }}
      >
        department
      </button>
    </div>
  );
};
