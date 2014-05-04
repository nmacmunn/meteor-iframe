meteor-iframe
=============

A simple Meteor package that detects when an app is running in an iframe

## Usage

On the client only:

```javascript
iframe();
```

As a template helper:

```html
{{#unless iframe}}<nav class="navbar">...</nav>{{/unless}}
```