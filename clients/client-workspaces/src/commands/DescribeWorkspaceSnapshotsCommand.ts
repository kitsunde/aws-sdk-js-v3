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

import { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/models_0";
import { de_DescribeWorkspaceSnapshotsCommand, se_DescribeWorkspaceSnapshotsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 *
 * The input for {@link DescribeWorkspaceSnapshotsCommand}.
 */
export interface DescribeWorkspaceSnapshotsCommandInput extends DescribeWorkspaceSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceSnapshotsCommand}.
 */
export interface DescribeWorkspaceSnapshotsCommandOutput extends DescribeWorkspaceSnapshotsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the snapshots for the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceSnapshotsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceSnapshotsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceSnapshotsResult
 * //   RebuildSnapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   RestoreSnapshots: [
 * //     {
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceSnapshotsCommandInput - {@link DescribeWorkspaceSnapshotsCommandInput}
 * @returns {@link DescribeWorkspaceSnapshotsCommandOutput}
 * @see {@link DescribeWorkspaceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeWorkspaceSnapshotsCommand extends $Command<
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: DescribeWorkspaceSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceSnapshotsCommandInput, DescribeWorkspaceSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceSnapshotsCommand";
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
  private serialize(input: DescribeWorkspaceSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkspaceSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
    return de_DescribeWorkspaceSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
