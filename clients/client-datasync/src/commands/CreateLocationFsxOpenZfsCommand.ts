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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateLocationFsxOpenZfsRequest,
  CreateLocationFsxOpenZfsRequestFilterSensitiveLog,
  CreateLocationFsxOpenZfsResponse,
} from "../models/models_0";
import { de_CreateLocationFsxOpenZfsCommand, se_CreateLocationFsxOpenZfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateLocationFsxOpenZfsCommand}.
 */
export interface CreateLocationFsxOpenZfsCommandInput extends CreateLocationFsxOpenZfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxOpenZfsCommand}.
 */
export interface CreateLocationFsxOpenZfsCommandOutput extends CreateLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p>
 *          <note>
 *             <p>Request parameters related to <code>SMB</code> aren't supported with the
 *           <code>CreateLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxOpenZfsRequest
 *   FsxFilesystemArn: "STRING_VALUE", // required
 *   Protocol: { // FsxProtocol
 *     NFS: { // FsxProtocolNfs
 *       MountOptions: { // NfsMountOptions
 *         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *       },
 *     },
 *     SMB: { // FsxProtocolSmb
 *       Domain: "STRING_VALUE",
 *       MountOptions: { // SmbMountOptions
 *         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *       },
 *       Password: "STRING_VALUE", // required
 *       User: "STRING_VALUE", // required
 *     },
 *   },
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   Subdirectory: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxOpenZfsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxOpenZfsCommandInput - {@link CreateLocationFsxOpenZfsCommandInput}
 * @returns {@link CreateLocationFsxOpenZfsCommandOutput}
 * @see {@link CreateLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOpenZfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class CreateLocationFsxOpenZfsCommand extends $Command<
  CreateLocationFsxOpenZfsCommandInput,
  CreateLocationFsxOpenZfsCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: CreateLocationFsxOpenZfsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationFsxOpenZfsCommandInput, CreateLocationFsxOpenZfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocationFsxOpenZfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxOpenZfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxOpenZfsRequestFilterSensitiveLog,
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
  private serialize(input: CreateLocationFsxOpenZfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLocationFsxOpenZfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxOpenZfsCommandOutput> {
    return de_CreateLocationFsxOpenZfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
