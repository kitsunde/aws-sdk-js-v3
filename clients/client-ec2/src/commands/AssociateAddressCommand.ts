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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateAddressRequest, AssociateAddressResult } from "../models/models_0";
import { de_AssociateAddressCommand, se_AssociateAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link AssociateAddressCommand}.
 */
export interface AssociateAddressCommandInput extends AssociateAddressRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAddressCommand}.
 */
export interface AssociateAddressCommandOutput extends AssociateAddressResult, __MetadataBearer {}

/**
 * @public
 * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in
 *       subnets in Wavelength Zones) with an instance or a network interface. Before you can use an
 *       Elastic IP address, you must allocate it to your account.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already
 *       associated with a different instance, it is disassociated from that instance and associated
 *       with the specified instance. If you associate an Elastic IP address with an instance that has
 *       an existing Elastic IP address, the existing address is disassociated from the instance, but
 *       remains allocated to your account.</p>
 *          <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic
 *       IP address is associated with the primary IP address. If the Elastic IP address is already
 *       associated with a different instance or a network interface, you get an error unless you allow
 *       reassociation. You cannot associate an Elastic IP address with an instance or network
 *       interface that has an existing Elastic IP address.</p>
 *          <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication
 *       carrier to the instance or network interface. </p>
 *          <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p>
 *          <important>
 *             <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2
 *         doesn't return an error, and you may be charged for each time the Elastic IP address is
 *         remapped to the same instance. For more information, see the <i>Elastic IP
 *           Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2
 *           Pricing</a>.</p>
 *          </important>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateAddressRequest
 *   AllocationId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   AllowReassociation: true || false,
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE",
 *   PrivateIpAddress: "STRING_VALUE",
 * };
 * const command = new AssociateAddressCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAddressResult
 * //   AssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAddressCommandInput - {@link AssociateAddressCommandInput}
 * @returns {@link AssociateAddressCommandOutput}
 * @see {@link AssociateAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To associate an Elastic IP address in EC2-VPC
 * ```javascript
 * // This example associates the specified Elastic IP address with the specified instance in a VPC.
 * const input = {
 *   "AllocationId": "eipalloc-64d5890a",
 *   "InstanceId": "i-0b263919b6498b123"
 * };
 * const command = new AssociateAddressCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssociationId": "eipassoc-2bebb745"
 * }
 * *\/
 * // example id: ec2-associate-address-1
 * ```
 *
 * @example To associate an Elastic IP address with a network interface
 * ```javascript
 * // This example associates the specified Elastic IP address with the specified network interface.
 * const input = {
 *   "AllocationId": "eipalloc-64d5890a",
 *   "NetworkInterfaceId": "eni-1a2b3c4d"
 * };
 * const command = new AssociateAddressCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssociationId": "eipassoc-2bebb745"
 * }
 * *\/
 * // example id: ec2-associate-address-2
 * ```
 *
 * @example To associate an Elastic IP address in EC2-Classic
 * ```javascript
 * // This example associates an Elastic IP address with an instance in EC2-Classic.
 * const input = {
 *   "InstanceId": "i-07ffe74c7330ebf53",
 *   "PublicIp": "198.51.100.0"
 * };
 * const command = new AssociateAddressCommand(input);
 * await client.send(command);
 * // example id: ec2-associate-address-3
 * ```
 *
 */
export class AssociateAddressCommand extends $Command<
  AssociateAddressCommandInput,
  AssociateAddressCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: AssociateAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAddressCommandInput, AssociateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateAddressCommand";
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
  private serialize(input: AssociateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateAddressCommandOutput> {
    return de_AssociateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
