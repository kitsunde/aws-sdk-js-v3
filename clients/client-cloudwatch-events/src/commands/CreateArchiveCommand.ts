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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import { de_CreateArchiveCommand, se_CreateArchiveCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandInput extends CreateArchiveRequest {}
/**
 * @public
 *
 * The output of {@link CreateArchiveCommand}.
 */
export interface CreateArchiveCommandOutput extends CreateArchiveResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an archive of events with the specified settings. When you create an archive,
 *       incoming events might not immediately start being sent to the archive. Allow a short period of
 *       time for changes to take effect. If you do not specify a pattern to filter events sent to the
 *       archive, all events are sent to the archive except replayed events. Replayed events are not
 *       sent to an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // CreateArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 *   EventSourceArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventPattern: "STRING_VALUE",
 *   RetentionDays: Number("int"),
 * };
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // CreateArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateArchiveCommandInput - {@link CreateArchiveCommandInput}
 * @returns {@link CreateArchiveCommandOutput}
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class CreateArchiveCommand extends $Command<
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: CreateArchiveCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateArchiveCommandInput, CreateArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateArchiveCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "CreateArchiveCommand";
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
  private serialize(input: CreateArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateArchiveCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateArchiveCommandOutput> {
    return de_CreateArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
