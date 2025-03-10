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

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { GetReportDefinitionRequest, GetReportDefinitionResult } from "../models/models_0";
import { de_GetReportDefinitionCommand, se_GetReportDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetReportDefinitionCommand}.
 */
export interface GetReportDefinitionCommandInput extends GetReportDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetReportDefinitionCommand}.
 */
export interface GetReportDefinitionCommandOutput extends GetReportDefinitionResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, GetReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, GetReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // GetReportDefinitionRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new GetReportDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetReportDefinitionResult
 * //   reportId: "STRING_VALUE", // required
 * //   reportDescription: "STRING_VALUE", // required
 * //   reportFrequency: "STRING_VALUE", // required
 * //   format: "STRING_VALUE", // required
 * //   destinationS3Location: { // S3Location
 * //     bucket: "STRING_VALUE", // required
 * //     prefix: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdated: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetReportDefinitionCommandInput - {@link GetReportDefinitionCommandInput}
 * @returns {@link GetReportDefinitionCommandOutput}
 * @see {@link GetReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints for the API.</p>
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 * <p>Base exception class for all service exceptions from ApplicationCostProfiler service.</p>
 *
 */
export class GetReportDefinitionCommand extends $Command<
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
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
  constructor(readonly input: GetReportDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReportDefinitionCommandInput, GetReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReportDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "GetReportDefinitionCommand";
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
  private serialize(input: GetReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReportDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportDefinitionCommandOutput> {
    return de_GetReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
