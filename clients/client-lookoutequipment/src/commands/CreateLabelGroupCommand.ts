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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { CreateLabelGroupRequest, CreateLabelGroupResponse } from "../models/models_0";
import { de_CreateLabelGroupCommand, se_CreateLabelGroupCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link CreateLabelGroupCommand}.
 */
export interface CreateLabelGroupCommandInput extends CreateLabelGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateLabelGroupCommand}.
 */
export interface CreateLabelGroupCommandOutput extends CreateLabelGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Creates a group of labels.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateLabelGroupCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateLabelGroupCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateLabelGroupRequest
 *   LabelGroupName: "STRING_VALUE", // required
 *   FaultCodes: [ // FaultCodes
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateLabelGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateLabelGroupResponse
 * //   LabelGroupName: "STRING_VALUE",
 * //   LabelGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLabelGroupCommandInput - {@link CreateLabelGroupCommandInput}
 * @returns {@link CreateLabelGroupCommandOutput}
 * @see {@link CreateLabelGroupCommandInput} for command's `input` shape.
 * @see {@link CreateLabelGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> Resource limitations have been exceeded. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related AWS service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class CreateLabelGroupCommand extends $Command<
  CreateLabelGroupCommandInput,
  CreateLabelGroupCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: CreateLabelGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLabelGroupCommandInput, CreateLabelGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLabelGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "CreateLabelGroupCommand";
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
  private serialize(input: CreateLabelGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLabelGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLabelGroupCommandOutput> {
    return de_CreateLabelGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
