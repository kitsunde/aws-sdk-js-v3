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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResponse } from "../models/models_0";
import { de_DescribeSnapshotsCommand, se_DescribeSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
 *          or just the snapshots associated with a particular cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeSnapshotsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeSnapshotsRequest
 *   ClusterName: "STRING_VALUE",
 *   SnapshotName: "STRING_VALUE",
 *   Source: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ShowDetail: true || false,
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       Name: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       ClusterConfiguration: { // ClusterConfiguration
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         NodeType: "STRING_VALUE",
 * //         EngineVersion: "STRING_VALUE",
 * //         MaintenanceWindow: "STRING_VALUE",
 * //         TopicArn: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         ParameterGroupName: "STRING_VALUE",
 * //         SubnetGroupName: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         SnapshotRetentionLimit: Number("int"),
 * //         SnapshotWindow: "STRING_VALUE",
 * //         NumShards: Number("int"),
 * //         Shards: [ // ShardDetails
 * //           { // ShardDetail
 * //             Name: "STRING_VALUE",
 * //             Configuration: { // ShardConfiguration
 * //               Slots: "STRING_VALUE",
 * //               ReplicaCount: Number("int"),
 * //             },
 * //             Size: "STRING_VALUE",
 * //             SnapshotCreationTime: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //       DataTiering: "true" || "false",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: DescribeSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeSnapshotsCommand";
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
  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return de_DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
