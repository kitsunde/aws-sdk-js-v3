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

import { GetSessionTokenRequest, GetSessionTokenResponse } from "../models/models_0";
import { de_GetSessionTokenCommand, se_GetSessionTokenCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";

/**
 * @public
 *
 * The input for {@link GetSessionTokenCommand}.
 */
export interface GetSessionTokenCommandInput extends GetSessionTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionTokenCommand}.
 */
export interface GetSessionTokenCommandOutput extends GetSessionTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The
 *          credentials consist of an access key ID, a secret access key, and a security token.
 *          Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect
 *          programmatic calls to specific Amazon Web Services API operations like Amazon EC2 <code>StopInstances</code>.
 *          MFA-enabled IAM users would need to call <code>GetSessionToken</code> and submit an MFA
 *          code that is associated with their MFA device. Using the temporary security credentials
 *          that are returned from the call, IAM users can then make programmatic calls to API
 *          operations that require MFA authentication. If you do not supply a correct MFA code, then
 *          the API returns an access denied error. For a comparison of <code>GetSessionToken</code>
 *          with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting
 *             Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
 *             Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>No permissions are required for users to perform this operation. The purpose of the
 *                <code>sts:GetSessionToken</code> operation is to authenticate the user using MFA. You
 *             cannot use policies to control authentication operations. For more information, see
 *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getsessiontoken.html">Permissions for GetSessionToken</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>
 *             <b>Session Duration</b>
 *          </p>
 *          <p>The <code>GetSessionToken</code> operation must be called by using the long-term Amazon Web Services
 *          security credentials of the Amazon Web Services account root user or an IAM user. Credentials that are
 *          created by IAM users are valid for the duration that you specify. This duration can range
 *          from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default
 *          of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900
 *          seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>GetSessionToken</code> can be used
 *          to make API calls to any Amazon Web Services service with the following exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>You cannot call any IAM API operations unless MFA authentication information is
 *                included in the request.</p>
 *             </li>
 *             <li>
 *                <p>You cannot call any STS API <i>except</i>
 *                   <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>We recommend that you do not call <code>GetSessionToken</code> with Amazon Web Services account
 *             root user credentials. Instead, follow our <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users">best practices</a> by
 *             creating one or more IAM users, giving them the necessary permissions, and using IAM
 *             users for everyday interaction with Amazon Web Services. </p>
 *          </note>
 *          <p>The credentials that are returned by <code>GetSessionToken</code> are based on
 *          permissions associated with the user whose credentials were used to call the operation. If
 *             <code>GetSessionToken</code> is called using Amazon Web Services account root user credentials, the
 *          temporary credentials have root user permissions. Similarly, if
 *             <code>GetSessionToken</code> is called using the credentials of an IAM user, the
 *          temporary credentials have the same permissions as the IAM user. </p>
 *          <p>For more information about using <code>GetSessionToken</code> to create temporary
 *          credentials, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary
 *             Credentials for Users in Untrusted Environments</a> in the
 *             <i>IAM User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetSessionTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetSessionTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = { // GetSessionTokenRequest
 *   DurationSeconds: Number("int"),
 *   SerialNumber: "STRING_VALUE",
 *   TokenCode: "STRING_VALUE",
 * };
 * const command = new GetSessionTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionTokenCommandInput - {@link GetSessionTokenCommandInput}
 * @returns {@link GetSessionTokenCommandOutput}
 * @see {@link GetSessionTokenCommandInput} for command's `input` shape.
 * @see {@link GetSessionTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link RegionDisabledException} (client fault)
 *  <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate STS
 *             in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>IAM User
 *                     Guide</i>.</p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 * @example To get temporary credentials for an IAM user or an AWS account
 * ```javascript
 * //
 * const input = {
 *   "DurationSeconds": 3600,
 *   "SerialNumber": "YourMFASerialNumber",
 *   "TokenCode": "123456"
 * };
 * const command = new GetSessionTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Credentials": {
 *     "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
 *     "Expiration": "2011-07-11T19:55:29.611Z",
 *     "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     "SessionToken": "AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtpZ3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE"
 *   }
 * }
 * *\/
 * // example id: to-get-temporary-credentials-for-an-iam-user-or-an-aws-account-1480540814038
 * ```
 *
 */
export class GetSessionTokenCommand extends $Command<
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetSessionTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSessionTokenCommandInput, GetSessionTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSessionTokenCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "GetSessionTokenCommand";
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
  private serialize(input: GetSessionTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSessionTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSessionTokenCommandOutput> {
    return de_GetSessionTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
