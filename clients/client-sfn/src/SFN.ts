// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateActivityCommand,
  CreateActivityCommandInput,
  CreateActivityCommandOutput,
} from "./commands/CreateActivityCommand";
import {
  CreateStateMachineCommand,
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
} from "./commands/CreateStateMachineCommand";
import {
  DeleteActivityCommand,
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput,
} from "./commands/DeleteActivityCommand";
import {
  DeleteStateMachineCommand,
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
} from "./commands/DeleteStateMachineCommand";
import {
  DescribeActivityCommand,
  DescribeActivityCommandInput,
  DescribeActivityCommandOutput,
} from "./commands/DescribeActivityCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeMapRunCommand,
  DescribeMapRunCommandInput,
  DescribeMapRunCommandOutput,
} from "./commands/DescribeMapRunCommand";
import {
  DescribeStateMachineCommand,
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
} from "./commands/DescribeStateMachineCommand";
import {
  DescribeStateMachineForExecutionCommand,
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
} from "./commands/DescribeStateMachineForExecutionCommand";
import {
  GetActivityTaskCommand,
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
} from "./commands/GetActivityTaskCommand";
import {
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "./commands/GetExecutionHistoryCommand";
import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "./commands/ListActivitiesCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import { ListMapRunsCommand, ListMapRunsCommandInput, ListMapRunsCommandOutput } from "./commands/ListMapRunsCommand";
import {
  ListStateMachinesCommand,
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
} from "./commands/ListStateMachinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SendTaskFailureCommand,
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput,
} from "./commands/SendTaskFailureCommand";
import {
  SendTaskHeartbeatCommand,
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
} from "./commands/SendTaskHeartbeatCommand";
import {
  SendTaskSuccessCommand,
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
} from "./commands/SendTaskSuccessCommand";
import {
  StartExecutionCommand,
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
} from "./commands/StartExecutionCommand";
import {
  StartSyncExecutionCommand,
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
} from "./commands/StartSyncExecutionCommand";
import {
  StopExecutionCommand,
  StopExecutionCommandInput,
  StopExecutionCommandOutput,
} from "./commands/StopExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMapRunCommand,
  UpdateMapRunCommandInput,
  UpdateMapRunCommandOutput,
} from "./commands/UpdateMapRunCommand";
import {
  UpdateStateMachineCommand,
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
} from "./commands/UpdateStateMachineCommand";
import { SFNClient, SFNClientConfig } from "./SFNClient";

const commands = {
  CreateActivityCommand,
  CreateStateMachineCommand,
  DeleteActivityCommand,
  DeleteStateMachineCommand,
  DescribeActivityCommand,
  DescribeExecutionCommand,
  DescribeMapRunCommand,
  DescribeStateMachineCommand,
  DescribeStateMachineForExecutionCommand,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachinesCommand,
  ListTagsForResourceCommand,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StopExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineCommand,
};

export interface SFN {
  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateActivityCommandOutput>;
  createActivity(args: CreateActivityCommandInput, cb: (err: any, data?: CreateActivityCommandOutput) => void): void;
  createActivity(
    args: CreateActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStateMachineCommandOutput>;
  createStateMachine(
    args: CreateStateMachineCommandInput,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteActivityCommandOutput>;
  deleteActivity(args: DeleteActivityCommandInput, cb: (err: any, data?: DeleteActivityCommandOutput) => void): void;
  deleteActivity(
    args: DeleteActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStateMachineCommandOutput>;
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivityCommandOutput>;
  describeActivity(
    args: DescribeActivityCommandInput,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;
  describeActivity(
    args: DescribeActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMapRunCommandOutput>;
  describeMapRun(args: DescribeMapRunCommandInput, cb: (err: any, data?: DescribeMapRunCommandOutput) => void): void;
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMapRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStateMachineCommandOutput>;
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStateMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStateMachineForExecutionCommandOutput>;
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStateMachineForExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActivityTaskCommandOutput>;
  getActivityTask(args: GetActivityTaskCommandInput, cb: (err: any, data?: GetActivityTaskCommandOutput) => void): void;
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActivityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExecutionHistoryCommandOutput>;
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExecutionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivitiesCommandOutput>;
  listActivities(args: ListActivitiesCommandInput, cb: (err: any, data?: ListActivitiesCommandOutput) => void): void;
  listActivities(
    args: ListActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(args: ListExecutionsCommandInput, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(args: ListMapRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListMapRunsCommandOutput>;
  listMapRuns(args: ListMapRunsCommandInput, cb: (err: any, data?: ListMapRunsCommandOutput) => void): void;
  listMapRuns(
    args: ListMapRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMapRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStateMachinesCommandOutput>;
  listStateMachines(
    args: ListStateMachinesCommandInput,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStateMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskFailureCommandOutput>;
  sendTaskFailure(args: SendTaskFailureCommandInput, cb: (err: any, data?: SendTaskFailureCommandOutput) => void): void;
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskFailureCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskHeartbeatCommandOutput>;
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendTaskSuccessCommandOutput>;
  sendTaskSuccess(args: SendTaskSuccessCommandInput, cb: (err: any, data?: SendTaskSuccessCommandOutput) => void): void;
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendTaskSuccessCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExecutionCommandOutput>;
  startExecution(args: StartExecutionCommandInput, cb: (err: any, data?: StartExecutionCommandOutput) => void): void;
  startExecution(
    args: StartExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSyncExecutionCommandOutput>;
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSyncExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(args: StopExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopExecutionCommandOutput>;
  stopExecution(args: StopExecutionCommandInput, cb: (err: any, data?: StopExecutionCommandOutput) => void): void;
  stopExecution(
    args: StopExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(args: UpdateMapRunCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMapRunCommandOutput>;
  updateMapRun(args: UpdateMapRunCommandInput, cb: (err: any, data?: UpdateMapRunCommandOutput) => void): void;
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMapRunCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStateMachineCommandOutput>;
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStateMachineCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Step Functions</fullname>
 *          <p>Step Functions is a service that lets you coordinate the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has
 *       access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 */
export class SFN extends SFNClient implements SFN {}
createAggregatedClient(commands, SFN);
