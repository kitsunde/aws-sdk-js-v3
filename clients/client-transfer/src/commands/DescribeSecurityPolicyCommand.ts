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

import { DescribeSecurityPolicyRequest, DescribeSecurityPolicyResponse } from "../models/models_0";
import { de_DescribeSecurityPolicyCommand, se_DescribeSecurityPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 *
 * The input for {@link DescribeSecurityPolicyCommand}.
 */
export interface DescribeSecurityPolicyCommandInput extends DescribeSecurityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityPolicyCommand}.
 */
export interface DescribeSecurityPolicyCommandOutput extends DescribeSecurityPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the security policy that is attached to your file transfer protocol-enabled
 *       server. The response contains a description of the security policy's properties. For more
 *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeSecurityPolicyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeSecurityPolicyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeSecurityPolicyRequest
 *   SecurityPolicyName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityPolicyResponse
 * //   SecurityPolicy: { // DescribedSecurityPolicy
 * //     Fips: true || false,
 * //     SecurityPolicyName: "STRING_VALUE", // required
 * //     SshCiphers: [ // SecurityPolicyOptions
 * //       "STRING_VALUE",
 * //     ],
 * //     SshKexs: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SshMacs: [
 * //       "STRING_VALUE",
 * //     ],
 * //     TlsCiphers: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSecurityPolicyCommandInput - {@link DescribeSecurityPolicyCommandInput}
 * @returns {@link DescribeSecurityPolicyCommandOutput}
 * @see {@link DescribeSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class DescribeSecurityPolicyCommand extends $Command<
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: DescribeSecurityPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSecurityPolicyCommandInput, DescribeSecurityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSecurityPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeSecurityPolicyCommand";
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
  private serialize(input: DescribeSecurityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSecurityPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSecurityPolicyCommandOutput> {
    return de_DescribeSecurityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
