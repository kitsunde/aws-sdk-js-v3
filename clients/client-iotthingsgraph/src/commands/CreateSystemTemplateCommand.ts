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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemTemplateRequest, CreateSystemTemplateResponse } from "../models/models_0";
import { de_CreateSystemTemplateCommand, se_CreateSystemTemplateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateSystemTemplateCommand}.
 */
export interface CreateSystemTemplateCommandInput extends CreateSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateSystemTemplateCommand}.
 */
export interface CreateSystemTemplateCommandOutput extends CreateSystemTemplateResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a system. The system is validated against the entities in the
 *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateSystemTemplateRequest
 *   definition: { // DefinitionDocument
 *     language: "STRING_VALUE", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   compatibleNamespaceVersion: Number("long"),
 * };
 * const command = new CreateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemTemplateResponse
 * //   summary: { // SystemTemplateSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     revisionNumber: Number("long"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSystemTemplateCommandInput - {@link CreateSystemTemplateCommandInput}
 * @returns {@link CreateSystemTemplateCommandOutput}
 * @see {@link CreateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class CreateSystemTemplateCommand extends $Command<
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: CreateSystemTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSystemTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateSystemTemplateCommand";
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
  private serialize(input: CreateSystemTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSystemTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSystemTemplateCommandOutput> {
    return de_CreateSystemTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
