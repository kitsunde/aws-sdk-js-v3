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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetIntegrationRequest, GetIntegrationResult } from "../models/models_0";
import { de_GetIntegrationCommand, se_GetIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends GetIntegrationResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetIntegrationRequest
 *   ApiId: "STRING_VALUE", // required
 *   IntegrationId: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResult
 * //   ApiGatewayManaged: true || false,
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionType: "STRING_VALUE",
 * //   ContentHandlingStrategy: "STRING_VALUE",
 * //   CredentialsArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   IntegrationId: "STRING_VALUE",
 * //   IntegrationMethod: "STRING_VALUE",
 * //   IntegrationResponseSelectionExpression: "STRING_VALUE",
 * //   IntegrationSubtype: "STRING_VALUE",
 * //   IntegrationType: "STRING_VALUE",
 * //   IntegrationUri: "STRING_VALUE",
 * //   PassthroughBehavior: "STRING_VALUE",
 * //   PayloadFormatVersion: "STRING_VALUE",
 * //   RequestParameters: { // IntegrationParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RequestTemplates: { // TemplateMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseParameters: { // ResponseParameters
 * //     "<keys>": {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   TemplateSelectionExpression: "STRING_VALUE",
 * //   TimeoutInMillis: Number("int"),
 * //   TlsConfig: { // TlsConfig
 * //     ServerNameToVerify: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 */
export class GetIntegrationCommand extends $Command<
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
  ApiGatewayV2ClientResolvedConfig
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
  constructor(readonly input: GetIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntegrationCommandInput, GetIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetIntegrationCommand";
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
  private serialize(input: GetIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntegrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntegrationCommandOutput> {
    return de_GetIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
