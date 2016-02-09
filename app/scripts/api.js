var Mist = {
  keys: [{
    id: "test2",
    isDefault: false
  }, {
    id: "primary",
    isDefault: true
  }, {
    id: "kvm",
    isDefault: false
  }],
  scripts: [{
    description: "",
    entrypoint: "",
    id: "448082e761c94660acfe54427c5ca461",
    name: "test",
    script: "#!/bin/bash\necho 'hello world '",
    source: "inline",
    type: "executable",
    user: "marios@mist.io",
  }, {
    description: "test",
    entrypoint: "",
    id: "576bf98fe7e14d87b2b9075f099eeebe",
    name: "runner",
    script: "owner/repo",
    source: "github",
    type: "executable",
    user: "marios@mist.io"
  }]
};
