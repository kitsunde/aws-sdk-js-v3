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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RemoveTagsFromOnPremisesInstancesInput } from "../models/models_0";
import {
  de_RemoveTagsFromOnPremisesInstancesCommand,
  se_RemoveTagsFromOnPremisesInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RemoveTagsFromOnPremisesInstancesCommand}.
 */
export interface RemoveTagsFromOnPremisesInstancesCommandInput extends RemoveTagsFromOnPremisesInstancesInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsFromOnPremisesInstancesCommand}.
 */
export interface RemoveTagsFromOnPremisesInstancesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Removes one or more tags from one or more on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // RemoveTagsFromOnPremisesInstancesInput
 *   tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   instanceNames: [ // InstanceNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsFromOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsFromOnPremisesInstancesCommandInput - {@link RemoveTagsFromOnPremisesInstancesCommandInput}
 * @returns {@link RemoveTagsFromOnPremisesInstancesCommandOutput}
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InstanceLimitExceededException} (client fault)
 *  <p>The maximum number of allowed on-premises instances in a single call was
 *             exceeded.</p>
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InstanceNotRegisteredException} (client fault)
 *  <p>The specified on-premises instance is not registered.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag was specified in an invalid format.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *  <p>The maximum allowed number of tags was exceeded.</p>
 *
 * @throws {@link TagRequiredException} (client fault)
 *  <p>A tag was not specified.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class RemoveTagsFromOnPremisesInstancesCommand extends $Command<
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: RemoveTagsFromOnPremisesInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveTagsFromOnPremisesInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "RemoveTagsFromOnPremisesInstancesCommand";
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
    input: RemoveTagsFromOnPremisesInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RemoveTagsFromOnPremisesInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> {
    return de_RemoveTagsFromOnPremisesInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
