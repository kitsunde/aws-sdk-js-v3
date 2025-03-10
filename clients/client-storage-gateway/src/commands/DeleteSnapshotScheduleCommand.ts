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

import { DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput } from "../models/models_0";
import { de_DeleteSnapshotScheduleCommand, se_DeleteSnapshotScheduleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 *
 * The input for {@link DeleteSnapshotScheduleCommand}.
 */
export interface DeleteSnapshotScheduleCommandInput extends DeleteSnapshotScheduleInput {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotScheduleCommand}.
 */
export interface DeleteSnapshotScheduleCommandOutput extends DeleteSnapshotScheduleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a snapshot of a volume.</p>
 *
 *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
 *          action enables you to delete a snapshot schedule for a volume. For more information, see
 *             <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your
 *             volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). This operation is only supported for
 *          cached volume gateway types.</p>
 *
 *          <note>
 *
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteSnapshotScheduleInput
 *   VolumeARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotScheduleOutput
 * //   VolumeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSnapshotScheduleCommandInput - {@link DeleteSnapshotScheduleCommandInput}
 * @returns {@link DeleteSnapshotScheduleCommandOutput}
 * @see {@link DeleteSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To delete a snapshot of a volume
 * ```javascript
 * // This action enables you to delete a snapshot schedule for a volume.
 * const input = {
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new DeleteSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * // example id: to-delete-a-snapshot-of-a-volume-1471382234377
 * ```
 *
 */
export class DeleteSnapshotScheduleCommand extends $Command<
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DeleteSnapshotScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteSnapshotScheduleCommand";
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
  private serialize(input: DeleteSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSnapshotScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotScheduleCommandOutput> {
    return de_DeleteSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
