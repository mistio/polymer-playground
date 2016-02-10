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
  }],
  networks: [{
    domain_type: 0,
    id: "59887",
    is_default: true,
    name: "default_public_network",
    subnets: [],
    cloud: {
      id: "418XPpTRLsNEpJeJ62jnGs8z7VJu",
      title: "Nephoscale",
      provider: "nephoscale",
      enabled: true
    }
  }, {
    domain_type: 1,
    id: "59889",
    is_default: true,
    name: "default_private_network",
    subnets: [],
    cloud: {
      id: "418XPpTRLsNEpJeJ62jnGs8z7VJu",
      title: "Nephoscale",
      provider: "nephoscale",
      enabled: true
    }
  }, {
    dhcp_options_id: "dopt-3e35ea5b",
    id: "vpc-c20824a7",
    instance_tenancy: "default",
    is_default: false,
    name: "vpc-c20824a7",
    state: "available",
    subnets: [],
    cloud: {
      id: "d98cBYrPqjpAcybzriwznme1a9d",
      title: "EC2 Ireland",
      provider: "ec2_eu_west",
      enabled: true
    }
  }, {
    id: "ad3da031-634c-4606-a790-524b0dfb5783",
    name: "public",
    public: true,
    router_external: true,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }, {
    id: "020a9a4d-fbf3-4a5c-862e-3dec9bc48341",
    name: "test",
    public: false,
    router_external: false,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }, {
    id: "20322be8-66e6-4669-af4c-2caefa0391bc",
    name: "papaki",
    public: false,
    router_external: false,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }]
};
