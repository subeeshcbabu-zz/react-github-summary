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
                    <GitHubSummary username='yourusername' width='200'>
                </div>
            )
        }
    }
```

### Using at client side (Without npm)
