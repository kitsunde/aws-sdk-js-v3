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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteIndexFieldRequest, DeleteIndexFieldResponse } from "../models/models_0";
import { de_DeleteIndexFieldCommand, se_DeleteIndexFieldCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DeleteIndexFieldCommand}.
 */
export interface DeleteIndexFieldCommandInput extends DeleteIndexFieldRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIndexFieldCommand}.
 */
export interface DeleteIndexFieldCommandOutput extends DeleteIndexFieldResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DeleteIndexFieldRequest
 *   DomainName: "STRING_VALUE", // required
 *   IndexFieldName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexFieldCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIndexFieldResponse
 * //   IndexField: { // IndexFieldStatus
 * //     Options: { // IndexField
 * //       IndexFieldName: "STRING_VALUE", // required
 * //       IndexFieldType: "STRING_VALUE", // required
 * //       IntOptions: { // IntOptions
 * //         DefaultValue: Number("long"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       DoubleOptions: { // DoubleOptions
 * //         DefaultValue: Number("double"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LiteralOptions: { // LiteralOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       TextOptions: { // TextOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateOptions: { // DateOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LatLonOptions: { // LatLonOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       IntArrayOptions: { // IntArrayOptions
 * //         DefaultValue: Number("long"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       DoubleArrayOptions: { // DoubleArrayOptions
 * //         DefaultValue: Number("double"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       LiteralArrayOptions: { // LiteralArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       TextArrayOptions: { // TextArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateArrayOptions: { // DateArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "STRING_VALUE", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIndexFieldCommandInput - {@link DeleteIndexFieldCommandInput}
 * @returns {@link DeleteIndexFieldCommandOutput}
 * @see {@link DeleteIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DeleteIndexFieldCommand extends $Command<
  DeleteIndexFieldCommandInput,
  DeleteIndexFieldCommandOutput,
  CloudSearchClientResolvedConfig
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
  constructor(readonly input: DeleteIndexFieldCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIndexFieldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteIndexFieldCommand";
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
  private serialize(input: DeleteIndexFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteIndexFieldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIndexFieldCommandOutput> {
    return de_DeleteIndexFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
