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
import { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import { de_UpdateParameterGroupCommand, se_UpdateParameterGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateParameterGroupCommand}.
 */
export interface UpdateParameterGroupCommandInput extends UpdateParameterGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParameterGroupCommand}.
 */
export interface UpdateParameterGroupCommandOutput extends UpdateParameterGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateParameterGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateParameterGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateParameterGroupRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 *   ParameterNameValues: [ // ParameterNameValueList // required
 *     { // ParameterNameValue
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateParameterGroupResponse
 * //   ParameterGroup: { // ParameterGroup
 * //     Name: "STRING_VALUE",
 * //     Family: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateParameterGroupCommandInput - {@link UpdateParameterGroupCommandInput}
 * @returns {@link UpdateParameterGroupCommandOutput}
 * @see {@link UpdateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class UpdateParameterGroupCommand extends $Command<
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
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
  constructor(readonly input: UpdateParameterGroupCommandInput) {
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
  ): Handler<UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "UpdateParameterGroupCommand";
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
  private serialize(input: UpdateParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateParameterGroupCommandOutput> {
    return de_UpdateParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
