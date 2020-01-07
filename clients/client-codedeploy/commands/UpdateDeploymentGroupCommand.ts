import {
  CodeDeployClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodeDeployClient";
import {
  UpdateDeploymentGroupInput,
  UpdateDeploymentGroupOutput
} from "../models/index";
import {
  deserializeAws_json1_1UpdateDeploymentGroupCommand,
  serializeAws_json1_1UpdateDeploymentGroupCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateDeploymentGroupCommandInput = UpdateDeploymentGroupInput;
export type UpdateDeploymentGroupCommandOutput = UpdateDeploymentGroupOutput;

export class UpdateDeploymentGroupCommand extends $Command<
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeploymentGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDeploymentGroupCommandInput,
    UpdateDeploymentGroupCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDeploymentGroupCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDeploymentGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateDeploymentGroupCommandOutput> {
    return deserializeAws_json1_1UpdateDeploymentGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
