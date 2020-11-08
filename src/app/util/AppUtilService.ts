import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppUtilService {
  public calculatePollResult(pollQuestion, pollsArray, optionData) {
    pollQuestion.options.forEach((option, index) => {
      optionData["option" + (index + 1)] = {
        option,
        votes: 0,
        percent: 0
      };
    });

    if (pollsArray.length > 0) {
      let totalVotes = pollsArray.length;
      pollsArray.forEach((x, index) => {
        optionData[x.option].votes += 1;
      });

      Object.keys(optionData).forEach((x) => {
        optionData[x].percent = (optionData[x].votes / totalVotes) * 100;
      });
    }
  }

  onFileSelected(event, component) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    component.imageToSave = event.target.files[0];
    fileReader.onload = () => {
      component.imageToDisplay = fileReader.result as string;
    };
  }

  formatImageName(prefix, imageToSave) {
    return prefix + Date.now() + "." + imageToSave.name.split(".").pop(); // add timestamp to image name to keep it unique
  }
}
