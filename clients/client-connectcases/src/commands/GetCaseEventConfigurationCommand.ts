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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { GetCaseEventConfigurationRequest, GetCaseEventConfigurationResponse } from "../models/models_0";
import { de_GetCaseEventConfigurationCommand, se_GetCaseEventConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandInput extends GetCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandOutput extends GetCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the case event publishing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // GetCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseEventConfigurationResponse
 * //   eventBridge: { // EventBridgeConfiguration
 * //     enabled: true || false, // required
 * //     includedData: { // EventIncludedData
 * //       caseData: { // CaseEventIncludedData
 * //         fields: [ // FieldIdentifierList // required
 * //           { // FieldIdentifier
 * //             id: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       relatedItemData: { // RelatedItemEventIncludedData
 * //         includeContent: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCaseEventConfigurationCommandInput - {@link GetCaseEventConfigurationCommandInput}
 * @returns {@link GetCaseEventConfigurationCommandOutput}
 * @see {@link GetCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCaseEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class GetCaseEventConfigurationCommand extends $Command<
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: GetCaseEventConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCaseEventConfigurationCommandInput, GetCaseEventConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCaseEventConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "GetCaseEventConfigurationCommand";
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
  private serialize(input: GetCaseEventConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCaseEventConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCaseEventConfigurationCommandOutput> {
    return de_GetCaseEventConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
