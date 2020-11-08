import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppUtilService {
  public calculatePollResult(pollQuestion, pollsArray, optionData) {
    pollQuestion.options.forEach((option, index) => {
      optionData["option" + (index + 1)] = {
        option,
        votes: 0,
        percent: 0,
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

  formatImageName(imageName: string) {
    let newImageName = "";
    if (imageName) {
      const imgNameArr = imageName.split("\\");
      newImageName = "_" + imgNameArr[imgNameArr.length - 1];
    }
    return Date.now() + newImageName; // add timestamp to image name to keep it unique
  }
}
