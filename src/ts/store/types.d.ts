import { AppState } from "@/store/app/types";
import { AuthState } from "@/store/auth/types";
import { ProjectState } from "@/store/project/types";
import { EventState } from "@/store/event/types";
import { PlaceState } from "@/store/place/types";
import { NoteState } from "@/store/note/types";
import { NotificationState } from "@/store/notification/types";
import { UserState } from "@/store/user/types";

export interface RootState {
  app: AppState;
  auth: AuthState;
  project: ProjectState;
  event: EventState;
  place: PlaceState;
  note: NoteState;
  notification: NotificationState;
  user: UserState;
  idleVue:{isIdle}
}
