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
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeContinuousExportsRequest, DescribeContinuousExportsResponse } from "../models/models_0";
import { de_DescribeContinuousExportsCommand, se_DescribeContinuousExportsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeContinuousExportsCommand}.
 */
export interface DescribeContinuousExportsCommandInput extends DescribeContinuousExportsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContinuousExportsCommand}.
 */
export interface DescribeContinuousExportsCommandOutput extends DescribeContinuousExportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists exports as specified by ID. All continuous exports associated with your user
 *       account can be listed if you call <code>DescribeContinuousExports</code> as is without passing
 *       any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeContinuousExportsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeContinuousExportsRequest
 *   exportIds: [ // ContinuousExportIds
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeContinuousExportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContinuousExportsResponse
 * //   descriptions: [ // ContinuousExportDescriptions
 * //     { // ContinuousExportDescription
 * //       exportId: "STRING_VALUE",
 * //       status: "START_IN_PROGRESS" || "START_FAILED" || "ACTIVE" || "ERROR" || "STOP_IN_PROGRESS" || "STOP_FAILED" || "INACTIVE",
 * //       statusDetail: "STRING_VALUE",
 * //       s3Bucket: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       stopTime: new Date("TIMESTAMP"),
 * //       dataSource: "AGENT",
 * //       schemaStorageConfig: { // SchemaStorageConfig
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeContinuousExportsCommandInput - {@link DescribeContinuousExportsCommandInput}
 * @returns {@link DescribeContinuousExportsCommandOutput}
 * @see {@link DescribeContinuousExportsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousExportsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class DescribeContinuousExportsCommand extends $Command<
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeContinuousExportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContinuousExportsCommandInput, DescribeContinuousExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContinuousExportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeContinuousExportsCommand";
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
  private serialize(input: DescribeContinuousExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeContinuousExportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContinuousExportsCommandOutput> {
    return de_DescribeContinuousExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
