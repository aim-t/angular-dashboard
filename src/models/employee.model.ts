export interface Employee {
    id: number;
    name: string;
    image: string;
    submission_date: string;
    response_type: string;
    flow_rating: string;
    view_submission: string;
    leave_type: string;
    logins: Array<{
      day: string;
      time: number;
    }>;
  }
  