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

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { DeleteClusterSnapshotInput, DeleteClusterSnapshotOutput } from "../models/models_0";
import { de_DeleteClusterSnapshotCommand, se_DeleteClusterSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteClusterSnapshotCommand}.
 */
export interface DeleteClusterSnapshotCommandInput extends DeleteClusterSnapshotInput {}
/**
 * @public
 *
 * The output of {@link DeleteClusterSnapshotCommand}.
 */
export interface DeleteClusterSnapshotCommandOutput extends DeleteClusterSnapshotOutput, __MetadataBearer {}

/**
 * @public
 * <p>Delete a Elastic DocumentDB snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, DeleteClusterSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, DeleteClusterSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // DeleteClusterSnapshotInput
 *   snapshotArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterSnapshotOutput
 * //   snapshot: { // ClusterSnapshot
 * //     subnetIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     snapshotName: "STRING_VALUE", // required
 * //     snapshotArn: "STRING_VALUE", // required
 * //     snapshotCreationTime: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     clusterCreationTime: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     vpcSecurityGroupIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     adminUserName: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteClusterSnapshotCommandInput - {@link DeleteClusterSnapshotCommandInput}
 * @returns {@link DeleteClusterSnapshotCommandOutput}
 * @see {@link DeleteClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an access conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 */
export class DeleteClusterSnapshotCommand extends $Command<
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
  DocDBElasticClientResolvedConfig
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
  constructor(readonly input: DeleteClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBElasticClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "DeleteClusterSnapshotCommand";
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
  private serialize(input: DeleteClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterSnapshotCommandOutput> {
    return de_DeleteClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
