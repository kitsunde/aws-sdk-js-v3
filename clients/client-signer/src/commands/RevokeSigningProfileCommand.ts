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

import { RevokeSigningProfileRequest } from "../models/models_0";
import { de_RevokeSigningProfileCommand, se_RevokeSigningProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 *
 * The input for {@link RevokeSigningProfileCommand}.
 */
export interface RevokeSigningProfileCommandInput extends RevokeSigningProfileRequest {}
/**
 * @public
 *
 * The output of {@link RevokeSigningProfileCommand}.
 */
export interface RevokeSigningProfileCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Changes the state of a signing profile to REVOKED. This indicates that signatures
 * 			generated using the signing profile after an effective start date are no longer
 * 			valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // RevokeSigningProfileRequest
 *   profileName: "STRING_VALUE", // required
 *   profileVersion: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 *   effectiveTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new RevokeSigningProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeSigningProfileCommandInput - {@link RevokeSigningProfileCommandInput}
 * @returns {@link RevokeSigningProfileCommandOutput}
 * @see {@link RevokeSigningProfileCommandInput} for command's `input` shape.
 * @see {@link RevokeSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class RevokeSigningProfileCommand extends $Command<
  RevokeSigningProfileCommandInput,
  RevokeSigningProfileCommandOutput,
  SignerClientResolvedConfig
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
  constructor(readonly input: RevokeSigningProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeSigningProfileCommandInput, RevokeSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeSigningProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RevokeSigningProfileCommand";
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
  private serialize(input: RevokeSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeSigningProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSigningProfileCommandOutput> {
    return de_RevokeSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
