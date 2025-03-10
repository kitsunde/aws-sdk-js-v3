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

import { CreateDomainRequest, CreateDomainRequestFilterSensitiveLog, CreateDomainResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_CreateDomainCommand, se_CreateDomainCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandInput extends CreateDomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandOutput extends CreateDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html">Creating and managing Amazon OpenSearch Service domains</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreateDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreateDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // CreateDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   ClusterConfig: { // ClusterConfig
 *     InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 *     InstanceCount: Number("int"),
 *     DedicatedMasterEnabled: true || false,
 *     ZoneAwarenessEnabled: true || false,
 *     ZoneAwarenessConfig: { // ZoneAwarenessConfig
 *       AvailabilityZoneCount: Number("int"),
 *     },
 *     DedicatedMasterType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 *     DedicatedMasterCount: Number("int"),
 *     WarmEnabled: true || false,
 *     WarmType: "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search",
 *     WarmCount: Number("int"),
 *     ColdStorageOptions: { // ColdStorageOptions
 *       Enabled: true || false, // required
 *     },
 *     MultiAZWithStandbyEnabled: true || false,
 *   },
 *   EBSOptions: { // EBSOptions
 *     EBSEnabled: true || false,
 *     VolumeType: "standard" || "gp2" || "io1" || "gp3",
 *     VolumeSize: Number("int"),
 *     Iops: Number("int"),
 *     Throughput: Number("int"),
 *   },
 *   AccessPolicies: "STRING_VALUE",
 *   SnapshotOptions: { // SnapshotOptions
 *     AutomatedSnapshotStartHour: Number("int"),
 *   },
 *   VPCOptions: { // VPCOptions
 *     SubnetIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CognitoOptions: { // CognitoOptions
 *     Enabled: true || false,
 *     UserPoolId: "STRING_VALUE",
 *     IdentityPoolId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *   },
 *   EncryptionAtRestOptions: { // EncryptionAtRestOptions
 *     Enabled: true || false,
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptions
 *     Enabled: true || false,
 *   },
 *   AdvancedOptions: { // AdvancedOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LogPublishingOptions: { // LogPublishingOptions
 *     "<keys>": { // LogPublishingOption
 *       CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *       Enabled: true || false,
 *     },
 *   },
 *   DomainEndpointOptions: { // DomainEndpointOptions
 *     EnforceHTTPS: true || false,
 *     TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07",
 *     CustomEndpointEnabled: true || false,
 *     CustomEndpoint: "STRING_VALUE",
 *     CustomEndpointCertificateArn: "STRING_VALUE",
 *   },
 *   AdvancedSecurityOptions: { // AdvancedSecurityOptionsInput
 *     Enabled: true || false,
 *     InternalUserDatabaseEnabled: true || false,
 *     MasterUserOptions: { // MasterUserOptions
 *       MasterUserARN: "STRING_VALUE",
 *       MasterUserName: "STRING_VALUE",
 *       MasterUserPassword: "STRING_VALUE",
 *     },
 *     SAMLOptions: { // SAMLOptionsInput
 *       Enabled: true || false,
 *       Idp: { // SAMLIdp
 *         MetadataContent: "STRING_VALUE", // required
 *         EntityId: "STRING_VALUE", // required
 *       },
 *       MasterUserName: "STRING_VALUE",
 *       MasterBackendRole: "STRING_VALUE",
 *       SubjectKey: "STRING_VALUE",
 *       RolesKey: "STRING_VALUE",
 *       SessionTimeoutMinutes: Number("int"),
 *     },
 *     AnonymousAuthEnabled: true || false,
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AutoTuneOptions: { // AutoTuneOptionsInput
 *     DesiredState: "ENABLED" || "DISABLED",
 *     MaintenanceSchedules: [ // AutoTuneMaintenanceScheduleList
 *       { // AutoTuneMaintenanceSchedule
 *         StartAt: new Date("TIMESTAMP"),
 *         Duration: { // Duration
 *           Value: Number("long"),
 *           Unit: "HOURS",
 *         },
 *         CronExpressionForRecurrence: "STRING_VALUE",
 *       },
 *     ],
 *     UseOffPeakWindow: true || false,
 *   },
 *   OffPeakWindowOptions: { // OffPeakWindowOptions
 *     Enabled: true || false,
 *     OffPeakWindow: { // OffPeakWindow
 *       WindowStartTime: { // WindowStartTime
 *         Hours: Number("long"), // required
 *         Minutes: Number("long"), // required
 *       },
 *     },
 *   },
 *   SoftwareUpdateOptions: { // SoftwareUpdateOptions
 *     AutoSoftwareUpdateEnabled: true || false,
 *   },
 * };
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainResponse
 * //   DomainStatus: { // DomainStatus
 * //     DomainId: "STRING_VALUE", // required
 * //     DomainName: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Created: true || false,
 * //     Deleted: true || false,
 * //     Endpoint: "STRING_VALUE",
 * //     Endpoints: { // EndpointsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Processing: true || false,
 * //     UpgradeProcessing: true || false,
 * //     EngineVersion: "STRING_VALUE",
 * //     ClusterConfig: { // ClusterConfig
 * //       InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //       InstanceCount: Number("int"),
 * //       DedicatedMasterEnabled: true || false,
 * //       ZoneAwarenessEnabled: true || false,
 * //       ZoneAwarenessConfig: { // ZoneAwarenessConfig
 * //         AvailabilityZoneCount: Number("int"),
 * //       },
 * //       DedicatedMasterType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //       DedicatedMasterCount: Number("int"),
 * //       WarmEnabled: true || false,
 * //       WarmType: "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search",
 * //       WarmCount: Number("int"),
 * //       ColdStorageOptions: { // ColdStorageOptions
 * //         Enabled: true || false, // required
 * //       },
 * //       MultiAZWithStandbyEnabled: true || false,
 * //     },
 * //     EBSOptions: { // EBSOptions
 * //       EBSEnabled: true || false,
 * //       VolumeType: "standard" || "gp2" || "io1" || "gp3",
 * //       VolumeSize: Number("int"),
 * //       Iops: Number("int"),
 * //       Throughput: Number("int"),
 * //     },
 * //     AccessPolicies: "STRING_VALUE",
 * //     SnapshotOptions: { // SnapshotOptions
 * //       AutomatedSnapshotStartHour: Number("int"),
 * //     },
 * //     VPCOptions: { // VPCDerivedInfo
 * //       VPCId: "STRING_VALUE",
 * //       SubnetIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CognitoOptions: { // CognitoOptions
 * //       Enabled: true || false,
 * //       UserPoolId: "STRING_VALUE",
 * //       IdentityPoolId: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //     EncryptionAtRestOptions: { // EncryptionAtRestOptions
 * //       Enabled: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     NodeToNodeEncryptionOptions: { // NodeToNodeEncryptionOptions
 * //       Enabled: true || false,
 * //     },
 * //     AdvancedOptions: { // AdvancedOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LogPublishingOptions: { // LogPublishingOptions
 * //       "<keys>": { // LogPublishingOption
 * //         CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //         Enabled: true || false,
 * //       },
 * //     },
 * //     ServiceSoftwareOptions: { // ServiceSoftwareOptions
 * //       CurrentVersion: "STRING_VALUE",
 * //       NewVersion: "STRING_VALUE",
 * //       UpdateAvailable: true || false,
 * //       Cancellable: true || false,
 * //       UpdateStatus: "PENDING_UPDATE" || "IN_PROGRESS" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //       Description: "STRING_VALUE",
 * //       AutomatedUpdateDate: new Date("TIMESTAMP"),
 * //       OptionalDeployment: true || false,
 * //     },
 * //     DomainEndpointOptions: { // DomainEndpointOptions
 * //       EnforceHTTPS: true || false,
 * //       TLSSecurityPolicy: "Policy-Min-TLS-1-0-2019-07" || "Policy-Min-TLS-1-2-2019-07",
 * //       CustomEndpointEnabled: true || false,
 * //       CustomEndpoint: "STRING_VALUE",
 * //       CustomEndpointCertificateArn: "STRING_VALUE",
 * //     },
 * //     AdvancedSecurityOptions: { // AdvancedSecurityOptions
 * //       Enabled: true || false,
 * //       InternalUserDatabaseEnabled: true || false,
 * //       SAMLOptions: { // SAMLOptionsOutput
 * //         Enabled: true || false,
 * //         Idp: { // SAMLIdp
 * //           MetadataContent: "STRING_VALUE", // required
 * //           EntityId: "STRING_VALUE", // required
 * //         },
 * //         SubjectKey: "STRING_VALUE",
 * //         RolesKey: "STRING_VALUE",
 * //         SessionTimeoutMinutes: Number("int"),
 * //       },
 * //       AnonymousAuthDisableDate: new Date("TIMESTAMP"),
 * //       AnonymousAuthEnabled: true || false,
 * //     },
 * //     AutoTuneOptions: { // AutoTuneOptionsOutput
 * //       State: "ENABLED" || "DISABLED" || "ENABLE_IN_PROGRESS" || "DISABLE_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_SCHEDULED" || "DISABLED_AND_ROLLBACK_IN_PROGRESS" || "DISABLED_AND_ROLLBACK_COMPLETE" || "DISABLED_AND_ROLLBACK_ERROR" || "ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //       UseOffPeakWindow: true || false,
 * //     },
 * //     ChangeProgressDetails: { // ChangeProgressDetails
 * //       ChangeId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     OffPeakWindowOptions: { // OffPeakWindowOptions
 * //       Enabled: true || false,
 * //       OffPeakWindow: { // OffPeakWindow
 * //         WindowStartTime: { // WindowStartTime
 * //           Hours: Number("long"), // required
 * //           Minutes: Number("long"), // required
 * //         },
 * //       },
 * //     },
 * //     SoftwareUpdateOptions: { // SoftwareUpdateOptions
 * //       AutoSoftwareUpdateEnabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDomainCommandInput - {@link CreateDomainCommandInput}
 * @returns {@link CreateDomainCommandOutput}
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class CreateDomainCommand extends $Command<
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: CreateDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDomainCommandInput, CreateDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "CreateDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainRequestFilterSensitiveLog,
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
  private serialize(input: CreateDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainCommandOutput> {
    return de_CreateDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
