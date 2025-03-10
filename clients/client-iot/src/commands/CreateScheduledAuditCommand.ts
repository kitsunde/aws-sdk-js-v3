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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateScheduledAuditRequest, CreateScheduledAuditResponse } from "../models/models_0";
import { de_CreateScheduledAuditCommand, se_CreateScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateScheduledAuditCommand}.
 */
export interface CreateScheduledAuditCommandInput extends CreateScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledAuditCommand}.
 */
export interface CreateScheduledAuditCommandOutput extends CreateScheduledAuditResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a scheduled audit that is run at a specified
 *           time interval.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateScheduledAuditRequest
 *   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY", // required
 *   dayOfMonth: "STRING_VALUE",
 *   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 *   targetCheckNames: [ // TargetAuditCheckNames // required
 *     "STRING_VALUE",
 *   ],
 *   scheduledAuditName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledAuditResponse
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScheduledAuditCommandInput - {@link CreateScheduledAuditCommandInput}
 * @returns {@link CreateScheduledAuditCommandOutput}
 * @see {@link CreateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateScheduledAuditCommand extends $Command<
  CreateScheduledAuditCommandInput,
  CreateScheduledAuditCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: CreateScheduledAuditCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateScheduledAuditCommandInput, CreateScheduledAuditCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateScheduledAuditCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateScheduledAuditCommand";
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
  private serialize(input: CreateScheduledAuditCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateScheduledAuditCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScheduledAuditCommandOutput> {
    return de_CreateScheduledAuditCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
