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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { UpdateGraphqlApiRequest, UpdateGraphqlApiResponse } from "../models/models_0";
import { de_UpdateGraphqlApiCommand, se_UpdateGraphqlApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateGraphqlApiCommand}.
 */
export interface UpdateGraphqlApiCommandInput extends UpdateGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGraphqlApiCommand}.
 */
export interface UpdateGraphqlApiCommandOutput extends UpdateGraphqlApiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // UpdateGraphqlApiRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   logConfig: { // LogConfig
 *     fieldLogLevel: "NONE" || "ERROR" || "ALL", // required
 *     cloudWatchLogsRoleArn: "STRING_VALUE", // required
 *     excludeVerboseContent: true || false,
 *   },
 *   authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 *   userPoolConfig: { // UserPoolConfig
 *     userPoolId: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *     defaultAction: "ALLOW" || "DENY", // required
 *     appIdClientRegex: "STRING_VALUE",
 *   },
 *   openIDConnectConfig: { // OpenIDConnectConfig
 *     issuer: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *     iatTTL: Number("long"),
 *     authTTL: Number("long"),
 *   },
 *   additionalAuthenticationProviders: [ // AdditionalAuthenticationProviders
 *     { // AdditionalAuthenticationProvider
 *       authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 *       openIDConnectConfig: {
 *         issuer: "STRING_VALUE", // required
 *         clientId: "STRING_VALUE",
 *         iatTTL: Number("long"),
 *         authTTL: Number("long"),
 *       },
 *       userPoolConfig: { // CognitoUserPoolConfig
 *         userPoolId: "STRING_VALUE", // required
 *         awsRegion: "STRING_VALUE", // required
 *         appIdClientRegex: "STRING_VALUE",
 *       },
 *       lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 *         authorizerResultTtlInSeconds: Number("int"),
 *         authorizerUri: "STRING_VALUE", // required
 *         identityValidationExpression: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   xrayEnabled: true || false,
 *   lambdaAuthorizerConfig: {
 *     authorizerResultTtlInSeconds: Number("int"),
 *     authorizerUri: "STRING_VALUE", // required
 *     identityValidationExpression: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGraphqlApiResponse
 * //   graphqlApi: { // GraphqlApi
 * //     name: "STRING_VALUE",
 * //     apiId: "STRING_VALUE",
 * //     authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //     logConfig: { // LogConfig
 * //       fieldLogLevel: "NONE" || "ERROR" || "ALL", // required
 * //       cloudWatchLogsRoleArn: "STRING_VALUE", // required
 * //       excludeVerboseContent: true || false,
 * //     },
 * //     userPoolConfig: { // UserPoolConfig
 * //       userPoolId: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE", // required
 * //       defaultAction: "ALLOW" || "DENY", // required
 * //       appIdClientRegex: "STRING_VALUE",
 * //     },
 * //     openIDConnectConfig: { // OpenIDConnectConfig
 * //       issuer: "STRING_VALUE", // required
 * //       clientId: "STRING_VALUE",
 * //       iatTTL: Number("long"),
 * //       authTTL: Number("long"),
 * //     },
 * //     arn: "STRING_VALUE",
 * //     uris: { // MapOfStringToString
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     additionalAuthenticationProviders: [ // AdditionalAuthenticationProviders
 * //       { // AdditionalAuthenticationProvider
 * //         authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //         openIDConnectConfig: {
 * //           issuer: "STRING_VALUE", // required
 * //           clientId: "STRING_VALUE",
 * //           iatTTL: Number("long"),
 * //           authTTL: Number("long"),
 * //         },
 * //         userPoolConfig: { // CognitoUserPoolConfig
 * //           userPoolId: "STRING_VALUE", // required
 * //           awsRegion: "STRING_VALUE", // required
 * //           appIdClientRegex: "STRING_VALUE",
 * //         },
 * //         lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 * //           authorizerResultTtlInSeconds: Number("int"),
 * //           authorizerUri: "STRING_VALUE", // required
 * //           identityValidationExpression: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     xrayEnabled: true || false,
 * //     wafWebAclArn: "STRING_VALUE",
 * //     lambdaAuthorizerConfig: {
 * //       authorizerResultTtlInSeconds: Number("int"),
 * //       authorizerUri: "STRING_VALUE", // required
 * //       identityValidationExpression: "STRING_VALUE",
 * //     },
 * //     dns: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     visibility: "GLOBAL" || "PRIVATE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGraphqlApiCommandInput - {@link UpdateGraphqlApiCommandInput}
 * @returns {@link UpdateGraphqlApiCommandOutput}
 * @see {@link UpdateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link UpdateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class UpdateGraphqlApiCommand extends $Command<
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: UpdateGraphqlApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateGraphqlApiCommand";
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
  private serialize(input: UpdateGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGraphqlApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGraphqlApiCommandOutput> {
    return de_UpdateGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
