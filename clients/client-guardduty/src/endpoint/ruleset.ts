// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@aws-sdk/util-endpoints";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/guardduty.json */

const s="required",
t="fn",
u="argv",
v="ref";
const a="isSet",
b="tree",
c="error",
d="endpoint",
e="PartitionResult",
f="getAttr",
g={[s]:false,"type":"String"},
h={[s]:true,"default":false,"type":"Boolean"},
i={[v]:"Endpoint"},
j={[t]:"booleanEquals",[u]:[{[v]:"UseFIPS"},true]},
k={[t]:"booleanEquals",[u]:[{[v]:"UseDualStack"},true]},
l={},
m={[t]:"booleanEquals",[u]:[true,{[t]:f,[u]:[{[v]:e},"supportsFIPS"]}]},
n={[v]:e},
o={[t]:"booleanEquals",[u]:[true,{[t]:f,[u]:[n,"supportsDualStack"]}]},
p=[j],
q=[k],
r=[{[v]:"Region"}];
const _data={version:"1.0",parameters:{Region:g,UseDualStack:h,UseFIPS:h,Endpoint:g},rules:[{conditions:[{[t]:a,[u]:[i]}],type:b,rules:[{conditions:p,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:c},{type:b,rules:[{conditions:q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:c},{endpoint:{url:i,properties:l,headers:l},type:d}]}]},{type:b,rules:[{conditions:[{[t]:a,[u]:r}],type:b,rules:[{conditions:[{[t]:"aws.partition",[u]:r,assign:e}],type:b,rules:[{conditions:[j,k],type:b,rules:[{conditions:[m,o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://guardduty-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:c}]},{conditions:p,type:b,rules:[{conditions:[m],type:b,rules:[{type:b,rules:[{conditions:[{[t]:"stringEquals",[u]:["aws-us-gov",{[t]:f,[u]:[n,"name"]}]}],endpoint:{url:"https://guardduty.{Region}.amazonaws.com",properties:l,headers:l},type:d},{endpoint:{url:"https://guardduty-fips.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"FIPS is enabled but this partition does not support FIPS",type:c}]},{conditions:q,type:b,rules:[{conditions:[o],type:b,rules:[{type:b,rules:[{endpoint:{url:"https://guardduty.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:l,headers:l},type:d}]}]},{error:"DualStack is enabled but this partition does not support DualStack",type:c}]},{type:b,rules:[{endpoint:{url:"https://guardduty.{Region}.{PartitionResult#dnsSuffix}",properties:l,headers:l},type:d}]}]}]},{error:"Invalid Configuration: Missing Region",type:c}]}]};
export const ruleSet: RuleSetObject = _data;
