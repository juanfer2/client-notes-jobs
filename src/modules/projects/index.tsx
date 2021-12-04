import React from 'react';
import { List, Avatar } from 'antd';
import { useProjects } from './useProjects'
import { useNavigate } from "react-router-dom";

function ProjectsModule() {
  let navigate = useNavigate()
  const { loandingProjects, error, projects }: { loandingProjects: boolean, error: any, projects: any[] } = useProjects()

  if (loandingProjects) return <div>Loanding...</div>
  if (error) return <div>error</div>

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<h4 onClick={()=> navigate(`projects/${item.id}`)} >{item.title}</h4>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProjectsModule
