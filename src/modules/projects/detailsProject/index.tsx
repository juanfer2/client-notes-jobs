import React from 'react';
import { List, Avatar } from 'antd';
import { useDetailsProject } from './useDetailsProject'
import { useNavigate } from "react-router-dom";
import { CopyBlock, dracula  } from "react-code-blocks";
import { useNavigation  } from "../../../routes/useNavigation";
import { Input, Button  } from 'antd';

function DetailsProject() {
  const { goCreateQuery } = useNavigation()
  const { loandingProject, error, project }: 
    { loandingProject: boolean, error: any, project: any } = useDetailsProject()

  if (loandingProject) return <div>Loanding...</div>
  if (error) return <div>error</div>

  return (
    <div className='details-project'>
      <div className='container-button-create'>
        <Button
          type="dashed"
          onClick={() => goCreateQuery()}
        >
          CreateQuery
        </Button>
      </div>
      {
        project.queryScripts && project.queryScripts.map( (query: any) => <div key={query.id}>
          <h3>- { query.title }</h3>
          { query && query.scripts.map( (script: any) => <div key={script.id}>
            { script.title && <h4> { script.title } </h4> }
            <CopyBlock
            text={script.content}
            language={script.type || 'text'}
            showLineNumbers={false}
            startingLineNumber={2}
            theme={dracula}
          />
            <br />
          </div>
          )}
        </div>
         )
      }
    </div>
  )
}

export default DetailsProject
