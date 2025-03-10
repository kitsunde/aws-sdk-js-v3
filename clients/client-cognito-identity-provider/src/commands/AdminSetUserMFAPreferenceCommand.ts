// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserMFAPreferenceRequestFilterSensitiveLog,
  AdminSetUserMFAPreferenceResponse,
} from "../models/models_0";
import { de_AdminSetUserMFAPreferenceCommand, se_AdminSetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminSetUserMFAPreferenceCommand}.
 */
export interface AdminSetUserMFAPreferenceCommandInput extends AdminSetUserMFAPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserMFAPreferenceCommand}.
 */
export interface AdminSetUserMFAPreferenceCommandOutput extends AdminSetUserMFAPreferenceResponse, __MetadataBearer {}

/**
 * @public
 * <p>The user's multi-factor authentication (MFA) preference, including which MFA options
 *             are activated, and if any are preferred. Only one factor can be set as preferred. The
 *             preferred MFA factor will be used to authenticate a user if multiple factors are
 *             activated. If multiple options are activated and no preference is set, a challenge to
 *             choose an MFA option will be returned during sign-in.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserMFAPreferenceRequest
 *   SMSMfaSettings: { // SMSMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   SoftwareTokenMfaSettings: { // SoftwareTokenMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   Username: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new AdminSetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminSetUserMFAPreferenceCommandInput - {@link AdminSetUserMFAPreferenceCommandInput}
 * @returns {@link AdminSetUserMFAPreferenceCommandOutput}
 * @see {@link AdminSetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserMFAPreferenceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminSetUserMFAPreferenceCommand extends $Command<
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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
  constructor(readonly input: AdminSetUserMFAPreferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminSetUserMFAPreferenceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserMFAPreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserMFAPreferenceRequestFilterSensitiveLog,
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
  private serialize(input: AdminSetUserMFAPreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminSetUserMFAPreferenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminSetUserMFAPreferenceCommandOutput> {
    return de_AdminSetUserMFAPreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
