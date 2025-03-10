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

import { GetServiceSyncBlockerSummaryInput, GetServiceSyncBlockerSummaryOutput } from "../models/models_0";
import {
  de_GetServiceSyncBlockerSummaryCommand,
  se_GetServiceSyncBlockerSummaryCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 *
 * The input for {@link GetServiceSyncBlockerSummaryCommand}.
 */
export interface GetServiceSyncBlockerSummaryCommandInput extends GetServiceSyncBlockerSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetServiceSyncBlockerSummaryCommand}.
 */
export interface GetServiceSyncBlockerSummaryCommandOutput
  extends GetServiceSyncBlockerSummaryOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Get detailed data for the service sync blocker summary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceSyncBlockerSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceSyncBlockerSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetServiceSyncBlockerSummaryInput
 *   serviceName: "STRING_VALUE", // required
 *   serviceInstanceName: "STRING_VALUE",
 * };
 * const command = new GetServiceSyncBlockerSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSyncBlockerSummaryOutput
 * //   serviceSyncBlockerSummary: { // ServiceSyncBlockerSummary
 * //     serviceName: "STRING_VALUE", // required
 * //     serviceInstanceName: "STRING_VALUE",
 * //     latestBlockers: [ // LatestSyncBlockers
 * //       { // SyncBlocker
 * //         id: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         status: "STRING_VALUE", // required
 * //         createdReason: "STRING_VALUE", // required
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         contexts: [ // SyncBlockerContexts
 * //           { // SyncBlockerContext
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         resolvedReason: "STRING_VALUE",
 * //         resolvedAt: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSyncBlockerSummaryCommandInput - {@link GetServiceSyncBlockerSummaryCommandInput}
 * @returns {@link GetServiceSyncBlockerSummaryCommandOutput}
 * @see {@link GetServiceSyncBlockerSummaryCommandInput} for command's `input` shape.
 * @see {@link GetServiceSyncBlockerSummaryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class GetServiceSyncBlockerSummaryCommand extends $Command<
  GetServiceSyncBlockerSummaryCommandInput,
  GetServiceSyncBlockerSummaryCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: GetServiceSyncBlockerSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceSyncBlockerSummaryCommandInput, GetServiceSyncBlockerSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceSyncBlockerSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetServiceSyncBlockerSummaryCommand";
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
  private serialize(input: GetServiceSyncBlockerSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceSyncBlockerSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceSyncBlockerSummaryCommandOutput> {
    return de_GetServiceSyncBlockerSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
