import React from 'react';
import { List, Avatar } from 'antd';
import { useProjects } from './useProjects'
import { useNavigate } from "react-router-dom";
import { useNavigation } from '../../routes/useNavigation';
import { Link } from "react-router-dom";

import { Button } from 'antd';


function ProjectsModule() {
  let navigate = useNavigate()
  const { goCreateProject } = useNavigation()
  const { loandingProjects, error, projects }: { loandingProjects: boolean, error: any, projects: any[] } = useProjects()

  if (loandingProjects) return <div>Loanding...</div>
  if (error) return <div>error</div>

  return (
    <div>
      <Button type="dashed" onClick={() => goCreateProject()}>
        Create Project
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={item => (
          <List.Item
            actions={[<Link to={`projects/${item.id}/edit`} key="list-loadmore-edit">edit</Link>]}
          >
            <List.Item.Meta
              key={`item-${item.id}`}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<Link to={`projects/${item.id}`} >{item.title}</Link>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProjectsModule
