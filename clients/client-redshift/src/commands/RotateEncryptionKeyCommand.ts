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

import { RotateEncryptionKeyMessage, RotateEncryptionKeyResult } from "../models/models_1";
import { de_RotateEncryptionKeyCommand, se_RotateEncryptionKeyCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link RotateEncryptionKeyCommand}.
 */
export interface RotateEncryptionKeyCommandInput extends RotateEncryptionKeyMessage {}
/**
 * @public
 *
 * The output of {@link RotateEncryptionKeyCommand}.
 */
export interface RotateEncryptionKeyCommandOutput extends RotateEncryptionKeyResult, __MetadataBearer {}

/**
 * @public
 * <p>Rotates the encryption keys for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RotateEncryptionKeyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RotateEncryptionKeyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // RotateEncryptionKeyMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RotateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // { // RotateEncryptionKeyResult
 * //   Cluster: { // Cluster
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     ClusterStatus: "STRING_VALUE",
 * //     ClusterAvailabilityStatus: "STRING_VALUE",
 * //     ModifyStatus: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DBName: "STRING_VALUE",
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       VpcEndpoints: [ // VpcEndpointsList
 * //         { // VpcEndpoint
 * //           VpcEndpointId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           NetworkInterfaces: [ // NetworkInterfaceList
 * //             { // NetworkInterface
 * //               NetworkInterfaceId: "STRING_VALUE",
 * //               SubnetId: "STRING_VALUE",
 * //               PrivateIpAddress: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     AutomatedSnapshotRetentionPeriod: Number("int"),
 * //     ManualSnapshotRetentionPeriod: Number("int"),
 * //     ClusterSecurityGroups: [ // ClusterSecurityGroupMembershipList
 * //       { // ClusterSecurityGroupMembership
 * //         ClusterSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterParameterGroups: [ // ClusterParameterGroupStatusList
 * //       { // ClusterParameterGroupStatus
 * //         ParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //         ClusterParameterStatusList: [ // ClusterParameterStatusList
 * //           { // ClusterParameterStatus
 * //             ParameterName: "STRING_VALUE",
 * //             ParameterApplyStatus: "STRING_VALUE",
 * //             ParameterApplyErrorDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ClusterSubnetGroupName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       MasterUserPassword: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       NumberOfNodes: Number("int"),
 * //       ClusterType: "STRING_VALUE",
 * //       ClusterVersion: "STRING_VALUE",
 * //       AutomatedSnapshotRetentionPeriod: Number("int"),
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       EnhancedVpcRouting: true || false,
 * //       MaintenanceTrackName: "STRING_VALUE",
 * //       EncryptionType: "STRING_VALUE",
 * //     },
 * //     ClusterVersion: "STRING_VALUE",
 * //     AllowVersionUpgrade: true || false,
 * //     NumberOfNodes: Number("int"),
 * //     PubliclyAccessible: true || false,
 * //     Encrypted: true || false,
 * //     RestoreStatus: { // RestoreStatus
 * //       Status: "STRING_VALUE",
 * //       CurrentRestoreRateInMegaBytesPerSecond: Number("double"),
 * //       SnapshotSizeInMegaBytes: Number("long"),
 * //       ProgressInMegaBytes: Number("long"),
 * //       ElapsedTimeInSeconds: Number("long"),
 * //       EstimatedTimeToCompletionInSeconds: Number("long"),
 * //     },
 * //     DataTransferProgress: { // DataTransferProgress
 * //       Status: "STRING_VALUE",
 * //       CurrentRateInMegaBytesPerSecond: Number("double"),
 * //       TotalDataInMegaBytes: Number("long"),
 * //       DataTransferredInMegaBytes: Number("long"),
 * //       EstimatedTimeToCompletionInSeconds: Number("long"),
 * //       ElapsedTimeInSeconds: Number("long"),
 * //     },
 * //     HsmStatus: { // HsmStatus
 * //       HsmClientCertificateIdentifier: "STRING_VALUE",
 * //       HsmConfigurationIdentifier: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     ClusterSnapshotCopyStatus: { // ClusterSnapshotCopyStatus
 * //       DestinationRegion: "STRING_VALUE",
 * //       RetentionPeriod: Number("long"),
 * //       ManualSnapshotRetentionPeriod: Number("int"),
 * //       SnapshotCopyGrantName: "STRING_VALUE",
 * //     },
 * //     ClusterPublicKey: "STRING_VALUE",
 * //     ClusterNodes: [ // ClusterNodesList
 * //       { // ClusterNode
 * //         NodeRole: "STRING_VALUE",
 * //         PrivateIPAddress: "STRING_VALUE",
 * //         PublicIPAddress: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ElasticIpStatus: { // ElasticIpStatus
 * //       ElasticIp: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     ClusterRevisionNumber: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     EnhancedVpcRouting: true || false,
 * //     IamRoles: [ // ClusterIamRoleList
 * //       { // ClusterIamRole
 * //         IamRoleArn: "STRING_VALUE",
 * //         ApplyStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PendingActions: [ // PendingActionsList
 * //       "STRING_VALUE",
 * //     ],
 * //     MaintenanceTrackName: "STRING_VALUE",
 * //     ElasticResizeNumberOfNodeOptions: "STRING_VALUE",
 * //     DeferredMaintenanceWindows: [ // DeferredMaintenanceWindowsList
 * //       { // DeferredMaintenanceWindow
 * //         DeferMaintenanceIdentifier: "STRING_VALUE",
 * //         DeferMaintenanceStartTime: new Date("TIMESTAMP"),
 * //         DeferMaintenanceEndTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     SnapshotScheduleIdentifier: "STRING_VALUE",
 * //     SnapshotScheduleState: "MODIFYING" || "ACTIVE" || "FAILED",
 * //     ExpectedNextSnapshotScheduleTime: new Date("TIMESTAMP"),
 * //     ExpectedNextSnapshotScheduleTimeStatus: "STRING_VALUE",
 * //     NextMaintenanceWindowStartTime: new Date("TIMESTAMP"),
 * //     ResizeInfo: { // ResizeInfo
 * //       ResizeType: "STRING_VALUE",
 * //       AllowCancelResize: true || false,
 * //     },
 * //     AvailabilityZoneRelocationStatus: "STRING_VALUE",
 * //     ClusterNamespaceArn: "STRING_VALUE",
 * //     TotalStorageCapacityInMegaBytes: Number("long"),
 * //     AquaConfiguration: { // AquaConfiguration
 * //       AquaStatus: "enabled" || "disabled" || "applying",
 * //       AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 * //     },
 * //     DefaultIamRoleArn: "STRING_VALUE",
 * //     ReservedNodeExchangeStatus: { // ReservedNodeExchangeStatus
 * //       ReservedNodeExchangeRequestId: "STRING_VALUE",
 * //       Status: "REQUESTED" || "PENDING" || "IN_PROGRESS" || "RETRYING" || "SUCCEEDED" || "FAILED",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       SourceReservedNodeId: "STRING_VALUE",
 * //       SourceReservedNodeType: "STRING_VALUE",
 * //       SourceReservedNodeCount: Number("int"),
 * //       TargetReservedNodeOfferingId: "STRING_VALUE",
 * //       TargetReservedNodeType: "STRING_VALUE",
 * //       TargetReservedNodeCount: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RotateEncryptionKeyCommandInput - {@link RotateEncryptionKeyCommandInput}
 * @returns {@link RotateEncryptionKeyCommandOutput}
 * @see {@link RotateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link RotateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class RotateEncryptionKeyCommand extends $Command<
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: RotateEncryptionKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RotateEncryptionKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RotateEncryptionKeyCommand";
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
  private serialize(input: RotateEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RotateEncryptionKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateEncryptionKeyCommandOutput> {
    return de_RotateEncryptionKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
