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

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import {
  PutSnapshotBlockRequest,
  PutSnapshotBlockRequestFilterSensitiveLog,
  PutSnapshotBlockResponse,
} from "../models/models_0";
import { de_PutSnapshotBlockCommand, se_PutSnapshotBlockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutSnapshotBlockCommand}.
 */
export type PutSnapshotBlockCommandInputType = Omit<PutSnapshotBlockRequest, "BlockData"> & {
  /**
   * For *`PutSnapshotBlockRequest["BlockData"]`*, see {@link PutSnapshotBlockRequest.BlockData}.
   */
  BlockData: PutSnapshotBlockRequest["BlockData"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutSnapshotBlockRequest` interface. There are more parameters than `BlockData` defined in {@link PutSnapshotBlockRequest}
 */
export interface PutSnapshotBlockCommandInput extends PutSnapshotBlockCommandInputType {}
/**
 * @public
 *
 * The output of {@link PutSnapshotBlockCommand}.
 */
export interface PutSnapshotBlockCommandOutput extends PutSnapshotBlockResponse, __MetadataBearer {}

/**
 * @public
 * <p>Writes a block of data to a snapshot. If the specified block contains
 *             data, the existing data is overwritten. The target snapshot must be in the
 *                 <code>pending</code> state.</p>
 *     	    <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, PutSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, PutSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const input = { // PutSnapshotBlockRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   BlockIndex: Number("int"), // required
 *   BlockData: "STREAMING_BLOB_VALUE", // required
 *   DataLength: Number("int"), // required
 *   Progress: Number("int"),
 *   Checksum: "STRING_VALUE", // required
 *   ChecksumAlgorithm: "STRING_VALUE", // required
 * };
 * const command = new PutSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * // { // PutSnapshotBlockResponse
 * //   Checksum: "STRING_VALUE",
 * //   ChecksumAlgorithm: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSnapshotBlockCommandInput - {@link PutSnapshotBlockCommandInput}
 * @returns {@link PutSnapshotBlockCommandOutput}
 * @see {@link PutSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link PutSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The number of API requests has exceed the maximum allowed API request throttling
 *             limit.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current service quotas do not allow you to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 *
 * @throws {@link EBSServiceException}
 * <p>Base exception class for all service exceptions from EBS service.</p>
 *
 */
export class PutSnapshotBlockCommand extends $Command<
  PutSnapshotBlockCommandInput,
  PutSnapshotBlockCommandOutput,
  EBSClientResolvedConfig
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
  constructor(readonly input: PutSnapshotBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSnapshotBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "PutSnapshotBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSnapshotBlockRequestFilterSensitiveLog,
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
  private serialize(input: PutSnapshotBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSnapshotBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSnapshotBlockCommandOutput> {
    return de_PutSnapshotBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
