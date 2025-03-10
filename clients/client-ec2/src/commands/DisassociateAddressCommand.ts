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
import { DisassociateAddressRequest } from "../models/models_5";
import { de_DisassociateAddressCommand, se_DisassociateAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DisassociateAddressCommand}.
 */
export interface DisassociateAddressCommandInput extends DisassociateAddressRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAddressCommand}.
 */
export interface DisassociateAddressCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
 * 				Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateAddressRequest
 *   AssociationId: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DisassociateAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAddressCommandInput - {@link DisassociateAddressCommandInput}
 * @returns {@link DisassociateAddressCommandOutput}
 * @see {@link DisassociateAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To disassociate an Elastic IP address in EC2-VPC
 * ```javascript
 * // This example disassociates an Elastic IP address from an instance in a VPC.
 * const input = {
 *   "AssociationId": "eipassoc-2bebb745"
 * };
 * const command = new DisassociateAddressCommand(input);
 * await client.send(command);
 * // example id: ec2-disassociate-address-1
 * ```
 *
 * @example To disassociate an Elastic IP addresses in EC2-Classic
 * ```javascript
 * // This example disassociates an Elastic IP address from an instance in EC2-Classic.
 * const input = {
 *   "PublicIp": "198.51.100.0"
 * };
 * const command = new DisassociateAddressCommand(input);
 * await client.send(command);
 * // example id: ec2-disassociate-address-2
 * ```
 *
 */
export class DisassociateAddressCommand extends $Command<
  DisassociateAddressCommandInput,
  DisassociateAddressCommandOutput,
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
  constructor(readonly input: DisassociateAddressCommandInput) {
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
  ): Handler<DisassociateAddressCommandInput, DisassociateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateAddressCommand";
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
  private serialize(input: DisassociateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateAddressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateAddressCommandOutput> {
    return de_DisassociateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
