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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DescribeOutboundCrossClusterSearchConnectionsRequest,
  DescribeOutboundCrossClusterSearchConnectionsResponse,
} from "../models/models_0";
import {
  de_DescribeOutboundCrossClusterSearchConnectionsCommand,
  se_DescribeOutboundCrossClusterSearchConnectionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeOutboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsCommandInput
  extends DescribeOutboundCrossClusterSearchConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOutboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  extends DescribeOutboundCrossClusterSearchConnectionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribeOutboundCrossClusterSearchConnectionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOutboundCrossClusterSearchConnectionsResponse
 * //   CrossClusterSearchConnections: [ // OutboundCrossClusterSearchConnections
 * //     { // OutboundCrossClusterSearchConnection
 * //       SourceDomainInfo: { // DomainInformation
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //       DestinationDomainInfo: {
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //       CrossClusterSearchConnectionId: "STRING_VALUE",
 * //       ConnectionAlias: "STRING_VALUE",
 * //       ConnectionStatus: { // OutboundCrossClusterSearchConnectionStatus
 * //         StatusCode: "PENDING_ACCEPTANCE" || "VALIDATING" || "VALIDATION_FAILED" || "PROVISIONING" || "ACTIVE" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOutboundCrossClusterSearchConnectionsCommandInput - {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput}
 * @returns {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput}
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class DescribeOutboundCrossClusterSearchConnectionsCommand extends $Command<
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: DescribeOutboundCrossClusterSearchConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeOutboundCrossClusterSearchConnectionsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeOutboundCrossClusterSearchConnectionsCommand";
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
  private serialize(
    input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOutboundCrossClusterSearchConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> {
    return de_DescribeOutboundCrossClusterSearchConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
