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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_0";
import {
  de_ModifyDBClusterSnapshotAttributeCommand,
  se_ModifyDBClusterSnapshotAttributeCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandInput extends ModifyDBClusterSnapshotAttributeMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterSnapshotAttributeCommand}.
 */
export interface ModifyDBClusterSnapshotAttributeCommandOutput
  extends ModifyDBClusterSnapshotAttributeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p>
 *          <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // ModifyDBClusterSnapshotAttributeMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   ValuesToAdd: [ // AttributeValueList
 *     "STRING_VALUE",
 *   ],
 *   ValuesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBClusterSnapshotAttributeResult
 * //   DBClusterSnapshotAttributesResult: { // DBClusterSnapshotAttributesResult
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterSnapshotAttributes: [ // DBClusterSnapshotAttributeList
 * //       { // DBClusterSnapshotAttribute
 * //         AttributeName: "STRING_VALUE",
 * //         AttributeValues: [ // AttributeValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterSnapshotAttributeCommandInput - {@link ModifyDBClusterSnapshotAttributeCommandInput}
 * @returns {@link ModifyDBClusterSnapshotAttributeCommandOutput}
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The provided value isn't a valid cluster snapshot state.</p>
 *
 * @throws {@link SharedSnapshotQuotaExceededFault} (client fault)
 *  <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command<
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: ModifyDBClusterSnapshotAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ModifyDBClusterSnapshotAttributeCommand";
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
    input: ModifyDBClusterSnapshotAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyDBClusterSnapshotAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> {
    return de_ModifyDBClusterSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
