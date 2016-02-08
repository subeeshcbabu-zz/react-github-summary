# react-github-summary
A react component to display the GitHub Summary including Profile, Activities, Contributions etc

## Usage

### Using from npm

To install

```
    npm install react-github-summary
```

```javascript

    import React from 'react';
    import { GitHubSummary } from 'react-github-summary'

    class MyComponent extends React.Component {

        render () {
            return (
                <div>
                    <GitHubSummary username='your-username' width='200'>
                </div>
            )
        }
    }
```

#### Required props

Prop name | Description
---- | -------------
`username` | GitHub username

#### Optional props

Prop name | Description
---- | -------------
`width` | The width of the summary component.
`imgWidth` | The width of the avatar image
`class` | The additional className to add to the top level div
