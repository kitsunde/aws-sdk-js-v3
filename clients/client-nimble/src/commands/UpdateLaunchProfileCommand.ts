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
  UpdateLaunchProfileRequest,
  UpdateLaunchProfileRequestFilterSensitiveLog,
  UpdateLaunchProfileResponse,
  UpdateLaunchProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_UpdateLaunchProfileCommand, se_UpdateLaunchProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateLaunchProfileCommand}.
 */
export interface UpdateLaunchProfileCommandInput extends UpdateLaunchProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchProfileCommand}.
 */
export interface UpdateLaunchProfileCommandOutput extends UpdateLaunchProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // UpdateLaunchProfileRequest
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   launchProfileId: "STRING_VALUE", // required
 *   launchProfileProtocolVersions: [ // LaunchProfileProtocolVersionList
 *     "STRING_VALUE",
 *   ],
 *   name: "STRING_VALUE",
 *   streamConfiguration: { // StreamConfigurationCreate
 *     clipboardMode: "ENABLED" || "DISABLED", // required
 *     ec2InstanceTypes: [ // StreamingInstanceTypeList // required
 *       "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 *     ],
 *     maxSessionLengthInMinutes: Number("int"),
 *     streamingImageIds: [ // StreamingImageIdList // required
 *       "STRING_VALUE",
 *     ],
 *     maxStoppedSessionLengthInMinutes: Number("int"),
 *     sessionStorage: { // StreamConfigurationSessionStorage
 *       root: { // StreamingSessionStorageRoot
 *         linux: "STRING_VALUE",
 *         windows: "STRING_VALUE",
 *       },
 *       mode: [ // StreamingSessionStorageModeList // required
 *         "UPLOAD",
 *       ],
 *     },
 *     sessionBackup: { // StreamConfigurationSessionBackup
 *       mode: "AUTOMATIC" || "DEACTIVATED",
 *       maxBackupsToRetain: Number("int"),
 *     },
 *     sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 *     volumeConfiguration: { // VolumeConfiguration
 *       size: Number("int"),
 *       throughput: Number("int"),
 *       iops: Number("int"),
 *     },
 *     automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 *   },
 *   studioComponentIds: [ // LaunchProfileStudioComponentIdList
 *     "STRING_VALUE",
 *   ],
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new UpdateLaunchProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLaunchProfileResponse
 * //   launchProfile: { // LaunchProfile
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2SubnetIds: [ // EC2SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     launchProfileId: "STRING_VALUE",
 * //     launchProfileProtocolVersions: [ // LaunchProfileProtocolVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "LAUNCH_PROFILE_CREATED" || "LAUNCH_PROFILE_UPDATED" || "LAUNCH_PROFILE_DELETED" || "LAUNCH_PROFILE_CREATE_IN_PROGRESS" || "LAUNCH_PROFILE_UPDATE_IN_PROGRESS" || "LAUNCH_PROFILE_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "STREAMING_IMAGE_NOT_FOUND" || "STREAMING_IMAGE_NOT_READY" || "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "INVALID_SUBNETS_PROVIDED" || "INVALID_INSTANCE_TYPES_PROVIDED" || "INVALID_SUBNETS_COMBINATION",
 * //     statusMessage: "STRING_VALUE",
 * //     streamConfiguration: { // StreamConfiguration
 * //       clipboardMode: "ENABLED" || "DISABLED", // required
 * //       ec2InstanceTypes: [ // StreamingInstanceTypeList // required
 * //         "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 * //       ],
 * //       maxSessionLengthInMinutes: Number("int"),
 * //       streamingImageIds: [ // StreamingImageIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       maxStoppedSessionLengthInMinutes: Number("int"),
 * //       sessionStorage: { // StreamConfigurationSessionStorage
 * //         root: { // StreamingSessionStorageRoot
 * //           linux: "STRING_VALUE",
 * //           windows: "STRING_VALUE",
 * //         },
 * //         mode: [ // StreamingSessionStorageModeList // required
 * //           "UPLOAD",
 * //         ],
 * //       },
 * //       sessionBackup: { // StreamConfigurationSessionBackup
 * //         mode: "AUTOMATIC" || "DEACTIVATED",
 * //         maxBackupsToRetain: Number("int"),
 * //       },
 * //       sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 * //       volumeConfiguration: { // VolumeConfiguration
 * //         size: Number("int"),
 * //         throughput: Number("int"),
 * //         iops: Number("int"),
 * //       },
 * //       automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 * //     },
 * //     studioComponentIds: [ // LaunchProfileStudioComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     validationResults: [ // ValidationResults
 * //       { // ValidationResult
 * //         type: "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT" || "VALIDATE_SUBNET_ASSOCIATION" || "VALIDATE_NETWORK_ACL_ASSOCIATION" || "VALIDATE_SECURITY_GROUP_ASSOCIATION", // required
 * //         state: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusCode: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION" || "VALIDATION_FAILED_SUBNET_NOT_FOUND" || "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION" || "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY" || "VALIDATION_FAILED_UNAUTHORIZED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLaunchProfileCommandInput - {@link UpdateLaunchProfileCommandInput}
 * @returns {@link UpdateLaunchProfileCommandOutput}
 * @see {@link UpdateLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 */
export class UpdateLaunchProfileCommand extends $Command<
  UpdateLaunchProfileCommandInput,
  UpdateLaunchProfileCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: UpdateLaunchProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLaunchProfileCommandInput, UpdateLaunchProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLaunchProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "UpdateLaunchProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLaunchProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLaunchProfileResponseFilterSensitiveLog,
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
  private serialize(input: UpdateLaunchProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLaunchProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLaunchProfileCommandOutput> {
    return de_UpdateLaunchProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
