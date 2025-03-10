// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { CreateLoadBalancerInput, CreateLoadBalancerOutput } from "../models/models_0";
import { de_CreateLoadBalancerCommand, se_CreateLoadBalancerCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandInput extends CreateLoadBalancerInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandOutput extends CreateLoadBalancerOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
 *       Balancer.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load
 *             Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load
 *             Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple load balancers with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateLoadBalancerInput
 *   Name: "STRING_VALUE", // required
 *   Subnets: [ // Subnets
 *     "STRING_VALUE",
 *   ],
 *   SubnetMappings: [ // SubnetMappings
 *     { // SubnetMapping
 *       SubnetId: "STRING_VALUE",
 *       AllocationId: "STRING_VALUE",
 *       PrivateIPv4Address: "STRING_VALUE",
 *       IPv6Address: "STRING_VALUE",
 *     },
 *   ],
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 *   Scheme: "internet-facing" || "internal",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Type: "application" || "network" || "gateway",
 *   IpAddressType: "ipv4" || "dualstack",
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoadBalancerOutput
 * //   LoadBalancers: [ // LoadBalancers
 * //     { // LoadBalancer
 * //       LoadBalancerArn: "STRING_VALUE",
 * //       DNSName: "STRING_VALUE",
 * //       CanonicalHostedZoneId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LoadBalancerName: "STRING_VALUE",
 * //       Scheme: "internet-facing" || "internal",
 * //       VpcId: "STRING_VALUE",
 * //       State: { // LoadBalancerState
 * //         Code: "active" || "provisioning" || "active_impaired" || "failed",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //       Type: "application" || "network" || "gateway",
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         { // AvailabilityZone
 * //           ZoneName: "STRING_VALUE",
 * //           SubnetId: "STRING_VALUE",
 * //           OutpostId: "STRING_VALUE",
 * //           LoadBalancerAddresses: [ // LoadBalancerAddresses
 * //             { // LoadBalancerAddress
 * //               IpAddress: "STRING_VALUE",
 * //               AllocationId: "STRING_VALUE",
 * //               PrivateIPv4Address: "STRING_VALUE",
 * //               IPv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SecurityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateLoadBalancerCommandInput - {@link CreateLoadBalancerCommandInput}
 * @returns {@link CreateLoadBalancerCommandOutput}
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link AllocationIdNotFoundException} (client fault)
 *  <p>The specified allocation ID does not exist.</p>
 *
 * @throws {@link AvailabilityZoneNotSupportedException} (client fault)
 *  <p>The specified Availability Zone is not supported.</p>
 *
 * @throws {@link DuplicateLoadBalancerNameException} (client fault)
 *  <p>A load balancer with the specified name already exists.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSchemeException} (client fault)
 *  <p>The requested scheme is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>The specified security group does not exist.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified subnet is out of available addresses.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A specified resource is in use.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>The specified subnet does not exist.</p>
 *
 * @throws {@link TooManyLoadBalancersException} (client fault)
 *  <p>You've reached the limit on the number of load balancers for your Amazon Web Services
 *       account.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags per load balancer.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To create an Internet-facing load balancer
 * ```javascript
 * // This example creates an Internet-facing load balancer and enables the Availability Zones for the specified subnets.
 * const input = {
 *   "Name": "my-load-balancer",
 *   "Subnets": [
 *     "subnet-b7d581c0",
 *     "subnet-8360a9e7"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancers": [
 *     {
 *       "AvailabilityZones": [
 *         {
 *           "SubnetId": "subnet-8360a9e7",
 *           "ZoneName": "us-west-2a"
 *         },
 *         {
 *           "SubnetId": "subnet-b7d581c0",
 *           "ZoneName": "us-west-2b"
 *         }
 *       ],
 *       "CanonicalHostedZoneId": "Z2P70J7EXAMPLE",
 *       "CreatedTime": "2016-03-25T21:26:12.920Z",
 *       "DNSName": "my-load-balancer-424835706.us-west-2.elb.amazonaws.com",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "LoadBalancerName": "my-load-balancer",
 *       "Scheme": "internet-facing",
 *       "SecurityGroups": [
 *         "sg-5943793c"
 *       ],
 *       "State": {
 *         "Code": "provisioning"
 *       },
 *       "Type": "application",
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-load-balancer-1
 * ```
 *
 * @example To create an internal load balancer
 * ```javascript
 * // This example creates an internal load balancer and enables the Availability Zones for the specified subnets.
 * const input = {
 *   "Name": "my-internal-load-balancer",
 *   "Scheme": "internal",
 *   "SecurityGroups": [],
 *   "Subnets": [
 *     "subnet-b7d581c0",
 *     "subnet-8360a9e7"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancers": [
 *     {
 *       "AvailabilityZones": [
 *         {
 *           "SubnetId": "subnet-8360a9e7",
 *           "ZoneName": "us-west-2a"
 *         },
 *         {
 *           "SubnetId": "subnet-b7d581c0",
 *           "ZoneName": "us-west-2b"
 *         }
 *       ],
 *       "CanonicalHostedZoneId": "Z2P70J7EXAMPLE",
 *       "CreatedTime": "2016-03-25T21:29:48.850Z",
 *       "DNSName": "internal-my-internal-load-balancer-1529930873.us-west-2.elb.amazonaws.com",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-internal-load-balancer/5b49b8d4303115c2",
 *       "LoadBalancerName": "my-internal-load-balancer",
 *       "Scheme": "internal",
 *       "SecurityGroups": [
 *         "sg-5943793c"
 *       ],
 *       "State": {
 *         "Code": "provisioning"
 *       },
 *       "Type": "application",
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-create-load-balancer-2
 * ```
 *
 */
export class CreateLoadBalancerCommand extends $Command<
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLoadBalancerCommandOutput> {
    return de_CreateLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
