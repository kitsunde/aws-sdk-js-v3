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
import { DisassociateSubnetCidrBlockRequest, DisassociateSubnetCidrBlockResult } from "../models/models_5";
import { de_DisassociateSubnetCidrBlockCommand, se_DisassociateSubnetCidrBlockCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DisassociateSubnetCidrBlockCommand}.
 */
export interface DisassociateSubnetCidrBlockCommandInput extends DisassociateSubnetCidrBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSubnetCidrBlockCommand}.
 */
export interface DisassociateSubnetCidrBlockCommandOutput extends DisassociateSubnetCidrBlockResult, __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateSubnetCidrBlockRequest
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSubnetCidrBlockResult
 * //   Ipv6CidrBlockAssociation: { // SubnetIpv6CidrBlockAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     Ipv6CidrBlock: "STRING_VALUE",
 * //     Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //       State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   },
 * //   SubnetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateSubnetCidrBlockCommandInput - {@link DisassociateSubnetCidrBlockCommandInput}
 * @returns {@link DisassociateSubnetCidrBlockCommandOutput}
 * @see {@link DisassociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisassociateSubnetCidrBlockCommand extends $Command<
  DisassociateSubnetCidrBlockCommandInput,
  DisassociateSubnetCidrBlockCommandOutput,
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
  constructor(readonly input: DisassociateSubnetCidrBlockCommandInput) {
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
  ): Handler<DisassociateSubnetCidrBlockCommandInput, DisassociateSubnetCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateSubnetCidrBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateSubnetCidrBlockCommand";
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
  private serialize(input: DisassociateSubnetCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateSubnetCidrBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSubnetCidrBlockCommandOutput> {
    return de_DisassociateSubnetCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
