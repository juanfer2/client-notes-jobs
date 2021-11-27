import React from 'react'
import { CopyBlock, dracula  } from "react-code-blocks";

function QueriesModule() {
  const data: any[] = [
    {
      id: 1,
      title: 'Rails access',
      scripts: [
        {
          id: 1,
          title: '',
          type: "text",
          content: `
          cd /AyendaProjects/ayenda/
          rvm use ruby-3.0.0
          rvm gemset use ayenda
          `
        }
      ]
    },
    {
      id: 2,
      title: 'Rails restar database',
      scripts: [
        {
          id: 1,
          title: '',
          type: "ruby",
          content: `rails db:drop db:create db:migrate views:create db:seed`
        }
      ]
    },
    {
      id: 3,
      title: 'Git commands',
      scripts: [
        {
          id: 2,
          title: '',
          type: "git",
          content: `git reset HEAD~{num}`
        },
        {
          id: 3,
          title: '',
          type: "git",
          content: `git add .`
        },
        {
          id: 4,
          title: '',
          type: "git",
          content: `git commit -m ""`
        },
        {
          id: 5,
          title: '',
          type: "git",
          content: `git rebase --continue`
        },
        {
          id: 6,
          title: 'Rename branch',
          type: "git",
          content: `git branch -m hotfix/976-fix-match`
        }
      ]
    },
    {
      id: 4,
      title: 'Redis',
      scripts: [
        {
          id: 7,
          title: '',
          type: "text",
          content: `redis-server`
        }
      ]
    },
    {
      id: 5,
      title: 'Sidekiq',
      scripts: [
        {
          id: 7,
          title: '',
          type: "text",
          content: `sidekiq`
        }
      ]
    },
    {
      id: 6,
      title: 'Staging',
      scripts: [
        {
          id: 7,
          title: '',
          type: "text",
          content: `ssh ayenda-staging-webserver`
        },
        {
          id: 8,
          title: '',
          type: "text",
          content: `cd /var/www/ayenda/servers/staging-4/current`
        },
        {
          id: 9,
          title: '',
          type: "ruby",
          content: `bundle exec rails c -e staging`
        },
        {
          id: 9,
          title: 'copy files',
          type: "ruby",
          content: `scp ayenda-staging-webserver:/var/www/ayenda/servers/staging-2/current/log/log_otp.log ./`
        },
      ]
    },
  ]

  return (
    <div>
      {
        data && data.map( (query) => <div key={query.id}>
          <h3>{ query.title }</h3>
          { query && query.scripts.map( (script: any) => <div key={script.id}>
            { script.title && <h4> { script.title } </h4> }
            
            <CopyBlock
            text={script.content}
            language={script.type}
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

export default QueriesModule
