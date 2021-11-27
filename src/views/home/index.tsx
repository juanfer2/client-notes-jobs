import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { CopyBlock, dracula  } from "react-code-blocks";

function Home() {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  const code = 'import {  } from "react"'

  return (
    <div>
      <h1>HOME Rsjx</h1>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />

      <CopyBlock
        text={code}
        language='jsx'
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
      />
    </div>
  )
}

export default Home