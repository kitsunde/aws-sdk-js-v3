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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ResolveRoomRequest, ResolveRoomResponse } from "../models/models_0";
import { de_ResolveRoomCommand, se_ResolveRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ResolveRoomCommand}.
 */
export interface ResolveRoomCommandInput extends ResolveRoomRequest {}
/**
 * @public
 *
 * The output of {@link ResolveRoomCommand}.
 */
export interface ResolveRoomCommandOutput extends ResolveRoomResponse, __MetadataBearer {}

/**
 * @public
 * <p>Determines the details for the room from which a skill request was invoked. This
 *          operation is used by skill developers.</p>
 *          <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When
 *          the skill is using an AWS Lambda function, the skill is automatically authorized when you
 *          publish your skill as a private skill to your AWS account. Skills that are hosted using a
 *          custom web service must be manually authorized. To get your skill authorized, contact AWS
 *          Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ResolveRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ResolveRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ResolveRoomRequest
 *   UserId: "STRING_VALUE", // required
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new ResolveRoomCommand(input);
 * const response = await client.send(command);
 * // { // ResolveRoomResponse
 * //   RoomArn: "STRING_VALUE",
 * //   RoomName: "STRING_VALUE",
 * //   RoomSkillParameters: [ // RoomSkillParameters
 * //     { // RoomSkillParameter
 * //       ParameterKey: "STRING_VALUE", // required
 * //       ParameterValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ResolveRoomCommandInput - {@link ResolveRoomCommandInput}
 * @returns {@link ResolveRoomCommandOutput}
 * @see {@link ResolveRoomCommandInput} for command's `input` shape.
 * @see {@link ResolveRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ResolveRoomCommand extends $Command<
  ResolveRoomCommandInput,
  ResolveRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ResolveRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveRoomCommandInput, ResolveRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ResolveRoomCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ResolveRoomCommand";
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
  private serialize(input: ResolveRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResolveRoomCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveRoomCommandOutput> {
    return de_ResolveRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
